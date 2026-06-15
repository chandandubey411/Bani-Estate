import WebSocket from "ws";
import http from "http";

http.get("http://localhost:9222/json/list", (res) => {
  let data = "";
  res.on("data", (chunk) => { data += chunk; });
  res.on("end", () => {
    try {
      const targets = JSON.parse(data);
      const target = targets.find(t => t.url.includes("localhost:5173"));
      if (!target) {
        console.error("Vite app tab not found.");
        process.exit(1);
      }
      
      const ws = new WebSocket(target.webSocketDebuggerUrl);
      
      ws.on("open", () => {
        ws.send(JSON.stringify({ id: 1, method: "Runtime.enable" }));
        
        // Wait 1 second for stabilization, then evaluate
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 2,
            method: "Runtime.evaluate",
            params: {
              expression: `
                JSON.stringify(
                  Array.from(document.querySelectorAll('main > *')).map(el => ({
                    tag: el.tagName,
                    id: el.id,
                    className: el.className,
                    text: el.innerText ? el.innerText.substring(0, 80) : '',
                    height: el.getBoundingClientRect().height,
                    width: el.getBoundingClientRect().width
                  }))
                )
              `,
              returnByValue: true
            }
          }));
        }, 1000);
      });
      
      ws.on("message", (msg) => {
        const response = JSON.parse(msg);
        if (response.id === 2) {
          const result = response.result?.result?.value;
          if (result) {
            console.log("\n--- CHILDREN OF <main> ---");
            const children = JSON.parse(result);
            console.log(JSON.stringify(children, null, 2));
            console.log("--------------------------\n");
          }
        }
      });
      
      setTimeout(() => {
        ws.close();
      }, 3000);
      
    } catch (e) {
      console.error(e);
    }
  });
});

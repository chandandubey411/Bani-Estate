import WebSocket from "ws";
import http from "http";
import fs from "fs";

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
        ws.send(JSON.stringify({ id: 1, method: "Page.enable" }));
        
        console.log("Navigating to http://localhost:5173/ ...");
        ws.send(JSON.stringify({
          id: 2,
          method: "Page.navigate",
          params: { url: "http://localhost:5173/" }
        }));
        
        // Wait 3 seconds for load and rendering
        setTimeout(() => {
          console.log("Capturing screenshot...");
          ws.send(JSON.stringify({
            id: 3,
            method: "Page.captureScreenshot",
            params: {
              format: "png"
            }
          }));
        }, 3000);
      });
      
      ws.on("message", (msg) => {
        const response = JSON.parse(msg);
        if (response.id === 3) {
          const base64Data = response.result?.data;
          if (base64Data) {
            fs.writeFileSync("hero_screenshot.png", Buffer.from(base64Data, "base64"));
            console.log("Screenshot saved successfully as hero_screenshot.png!");
          } else {
            console.error("Failed to capture screenshot data:", response);
          }
          ws.close();
        }
      });
      
    } catch (e) {
      console.error(e);
    }
  });
});

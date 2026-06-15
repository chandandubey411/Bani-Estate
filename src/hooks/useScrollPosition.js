import { useState } from "react";

export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return { isScrolled };
};

export default useScrollPosition;

import { useEffect } from "react";

function useEscapeKey(callback: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
}

export default useEscapeKey;

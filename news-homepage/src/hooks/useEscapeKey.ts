import { useEffect } from "react";

function useEscapeKey(callback: () => void) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.code === "Escape") {
      callback();
    }
  }
}

export default useEscapeKey;

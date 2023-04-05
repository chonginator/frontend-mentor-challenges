import { useState, useEffect } from "react";

type Size = {
  width: number | null;
  height: number | null;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Size>({
    width: null,
    height: null,
  });
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return windowSize;
}

export default useWindowSize;

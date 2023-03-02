import { useLayoutEffect } from "react";

function useLockBodyScroll(shouldLock: boolean) {
  useLayoutEffect(() => {
    document.body.style.overflow = shouldLock ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [shouldLock]);
}

export default useLockBodyScroll;

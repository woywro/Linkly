import { useEffect } from "react";
import { useRef } from "react";
export function useClickInside(elementRef, callback, show) {
  useEffect(() => {
    const handleClickInside = (event) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        elementRef.current.contains(event.target)
      ) {
        callback();
      }
      return;
    };
    if (show == true) {
      document.addEventListener("click", handleClickInside, true);
    }
    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, [elementRef, callback]);
}

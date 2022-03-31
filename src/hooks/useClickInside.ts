import { useEffect } from "react";
export function useClickInside(elementRef, callback) {
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
    document.addEventListener("click", handleClickInside, true);
    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, [elementRef, callback]);
}

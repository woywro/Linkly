import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  eventType: string = 'click'
) => {
  const handlerRef = useRef(callback);

  useEffect(() => {
    handlerRef.current = callback;
  });

  useEffect(() => {
    const listener = (event: any) => {
      if (ref && ref.current) {
        if (event.target.shadowRoot) {
          if (!event.target.shadowRoot.contains(ref.current)) {
            handlerRef.current(event);
          }
        } else {
          if (!ref.current.contains(event.target)) {
            handlerRef.current(event);
          }
        }
      }
    };

    document.addEventListener(eventType, listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener(eventType, listener);
      document.removeEventListener('touchstart', listener);
    };
  });
};

export default useClickOutside;

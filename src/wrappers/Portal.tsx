import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
<<<<<<< HEAD:src/wrappers/Portal.tsx
  children: JSX.Element[];
=======
  children: JSX.Element;
>>>>>>> development:src/HOC/Portal.tsx
  selector: any;
}

export function Portal({ children, selector }: Props) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}

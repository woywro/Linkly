import { useEffect } from 'react';
import React from 'react';

export const useClickInside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const handleClick = (e: any) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

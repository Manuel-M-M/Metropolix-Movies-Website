import { useState, useEffect } from "react";

// /**
//  * Hook for handling closing when clicking outside of an element
//  * @param {React.node} element
//  * @param {boolean} initialState
//  */
export const useDetectOutsideClick = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
import React from "react";

const useIntersectionObserver = <T extends HTMLElement>(
  options = {},
): [React.RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<T>(null) as React.RefObject<T>;

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

export default useIntersectionObserver;

import { useEffect, useRef } from 'react';

export const useScrollToTopOnView = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      { threshold: 0.05 } // Срабатывает, когда 50% элемента в поле зрения
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};
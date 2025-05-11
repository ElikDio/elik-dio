import { useEffect, useState } from 'react';

export const useScrollNavigation = (pageCount: number) => {
  const [page, setPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 800);

      if (event.deltaY > 50 && page < pageCount - 1) {
        setPage((prev) => prev + 1);
      } else if (event.deltaY < -50 && page > 0) {
        setPage((prev) => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [page, pageCount, isScrolling]);

  return { page };
};

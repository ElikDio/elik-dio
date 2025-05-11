import { useEffect, useState } from 'react';

export const useScrollNavigation = (totalPages: number) => {
  const [page, setPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const threshold = 120;

  useEffect(() => {
    let touchStartY = 0;

    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return;
      setIsScrolling(true);

      setPage((prev) =>
        event.deltaY > 0
          ? Math.min(prev + 1, totalPages - 1)
          : Math.max(prev - 1, 0)
      );

      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isScrolling) return;
      setIsScrolling(true);

      const touchEndY = event.touches[0].clientY;
      setPage((prev) =>
        touchStartY - touchEndY > threshold
          ? Math.min(prev + 1, totalPages - 1)
          : Math.max(prev - 1, 0)
      );

      setTimeout(() => setIsScrolling(false), 800);
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isScrolling, totalPages]);

  return { page };
};

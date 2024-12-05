import { useCallback, useEffect } from 'react';
import type { ImageDimensions } from '../types/image';

export function useImageResize(
  containerRef: React.RefObject<HTMLDivElement>,
  setDimensions: (dimensions: ImageDimensions) => void
) {
  const handleResize = useCallback((
    startEvent: React.MouseEvent,
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ) => {
    startEvent.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const startX = startEvent.clientX;
    const startY = startEvent.clientY;
    const startWidth = container.offsetWidth;
    const startHeight = container.offsetHeight;
    const containerRect = container.getBoundingClientRect();

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;

      switch (position) {
        case 'bottom-right':
          newWidth = startWidth + deltaX;
          newHeight = startHeight + deltaY;
          break;
        case 'bottom-left':
          newWidth = startWidth - deltaX;
          newHeight = startHeight + deltaY;
          break;
        case 'top-right':
          newWidth = startWidth + deltaX;
          newHeight = startHeight - deltaY;
          break;
        case 'top-left':
          newWidth = startWidth - deltaX;
          newHeight = startHeight - deltaY;
          break;
      }

      // Ensure minimum dimensions
      newWidth = Math.max(100, newWidth);
      newHeight = Math.max(100, newHeight);

      setDimensions({ width: newWidth, height: newHeight });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [containerRef, setDimensions]);

  return { handleResize };
}
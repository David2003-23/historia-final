import { useEffect, RefObject } from 'react';

export function useAutoScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 1; // pixels per frame

    const scroll = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        element.scrollTop = 0;
      } else {
        element.scrollTop += scrollSpeed * (deltaTime / 16.67); // Normalize to 60fps
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
}
import React, { useEffect, useRef } from 'react';
import { useAutoScroll } from '../hooks/useAutoScroll';

interface TimelineScrollProps {
  children: React.ReactNode;
}

export default function TimelineScroll({ children }: TimelineScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoScroll(scrollRef);

  return (
    <div 
      ref={scrollRef} 
      className="h-screen overflow-y-auto scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      {children}
    </div>
  );
}
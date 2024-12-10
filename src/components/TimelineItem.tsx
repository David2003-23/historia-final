import React from 'react';
import { TimelineEvent } from '../types';
import TimelineCard from './TimelineCard';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineItem({ event, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}>
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <TimelineCard event={event} />
      </div>
      <div className="w-2/12 flex justify-center relative">
        <div className="w-4 h-4 bg-white rounded-full border-4 border-red-500 z-10 shadow-lg" />
      </div>
      <div className="w-5/12" />
    </div>
  );
}
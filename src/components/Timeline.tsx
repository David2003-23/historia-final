import React from 'react';
import { TimelineEvent } from '../types';
import TimelineItem from './TimelineItem';
import TimelineScroll from './TimelineScroll';
import TimelineLine from './TimelineLine';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-50 to-gray-100">
      <TimelineScroll>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 uppercase tracking-wide">
            Historia de la Ferreteria Alemana
          </h1>
          <div className="relative">
            <TimelineLine />
            <div className="space-y-12">
              {events.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </TimelineScroll>
    </div>
  );
}
import React from 'react';
import { TimelineEvent } from '../types';
import { formatDescription } from '../utils/textFormatting';

interface TimelineCardProps {
  event: TimelineEvent;
}

export default function TimelineCard({ event }: TimelineCardProps) {
  const noImageYears = ['2014', '2018', '2022', '2023'];
  const showImage = !noImageYears.includes(event.year.toString());

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-red-600 mb-2">{event.year}</h3>
      <div className="text-gray-700 whitespace-pre-line">
        {formatDescription(event.description)}
      </div>
      {showImage && event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={`Event ${event.year}`}
          className="mt-4 rounded-lg w-full h-48 object-cover shadow-md"
        />
      )}
    </div>
  );
}
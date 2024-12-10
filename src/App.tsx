import React from 'react';
import Timeline from './components/Timeline';
import { timelineEvents } from './data/timelineEvents';

function App() {
  return (
    <div className="bg-gray-50">
      <Timeline events={timelineEvents} />
    </div>
  );
}

export default App;
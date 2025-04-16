'use client';
import React from 'react';

const EventCard = ({ title, borderColor }) => {
  return (
    <div 
      className="relative rounded overflow-hidden w-[564px] h-[455px]"
    >
      <div className={`w-full h-full bg-[#121f38]/80 border rounded ${borderColor}`}>
        <div className="h-3/4">
          <img src="/assets/events/eventcard.jpeg" alt="Event background" className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-2xl text-white font-uncut-sans">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

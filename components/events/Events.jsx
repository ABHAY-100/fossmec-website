'use client';
import React from 'react';
import EventCard from './EventCard';

const Events = () => {
  return (
    <div className="h-screen bg-[#121f38] relative px-8 flex flex-col">
     
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-20"></div>
    
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full py-8">
        
     
        <h2 className="text-4xl font-semibold italic uppercase mx-auto text-center mt-20 mb-6 font-uncut-sans-var tracking-tight leading-none bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC] bg-clip-text text-transparent">
          &lt;What abt events?&gt;
        </h2>
        
      
        <p className="font-dm-mono text-white text-2xl mx-auto mb-8 font-normal tracking-tight leading-[120%] max-w-[1000px] mt-10">
          Our events focus on open source, featuring expert talks, practical workshops, and collaborative spaces for students and tech enthusiasts.
        </p>
        
        
        <div className="flex gap-8 overflow-x-auto py-12 px-4">
          <EventCard title="Genisis" borderColor="border-yellow-500/60" />
          <EventCard title="Code-A-Pookalam" borderColor="border-blue-500/60" />
          <EventCard title="Devsprint" borderColor="border-teal-500/60" />
         {/* <EventCard title="DebUtsav" borderColor="border-purple-500/60" />
          <EventCard title="Hacktoberfest" borderColor="border-orange-500/60" /> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
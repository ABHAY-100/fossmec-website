'use client';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MdFlip } from 'react-icons/md';
import { useDrag } from 'react-dnd';
import { TbGripVertical } from 'react-icons/tb';

const EventCard = ({ title, borderColor, id, initialPosition = { x: 0, y: 0 } }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [position, setPosition] = useState(initialPosition);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        setPosition({
          x: position.x + delta.x,
          y: position.y + delta.y,
        });
      }
    },
  }));

  return (
    <div
      ref={drag}
      className="absolute cursor-move"
      style={{
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 1000 : 1,
      }}
    >
      <div className="relative rounded overflow-hidden w-[400px] h-[320px] [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <div className={`w-full h-full bg-[#121f38]/80 border rounded ${borderColor}`}>
              <div className="h-3/4">
                <img src="/assets/events/eventcard.jpeg" alt="Event background" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 relative">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl text-white font-uncut-sans">{title}</h3>
                  <TbGripVertical className="text-white text-xl" />
                </div>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="absolute bottom-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
                >
                  <MdFlip size={28} />
                </button>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className={`w-full h-full bg-[#121f38] border ${borderColor}`}>
              <div className="flex items-center justify-center h-full p-4 relative">
                <h3 className="text-3xl text-white font-uncut-sans">Hello FOSSMEC!</h3>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="absolute bottom-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
                >
                  <MdFlip size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen bg-[#121f38] relative px-8 flex flex-col">
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full py-8">
          <h2 className="text-4xl font-semibold italic uppercase mx-auto text-center mt-20 mb-6 font-uncut-sans-var tracking-tight leading-none bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC] bg-clip-text text-transparent">
            &lt;What abt events?&gt;
          </h2>
          
          <p className="font-dm-mono text-white text-2xl mx-auto mb-8 font-normal tracking-tight leading-[120%] max-w-[1000px] mt-10">
            Our events focus on open source, featuring expert talks, practical workshops, and collaborative spaces for students and tech enthusiasts.
          </p>

          <div className="relative min-h-[600px] mt-8">
            <EventCard
              id="1"
              title="Genisis"
              borderColor="border-yellow-500/60"
              initialPosition={{ x: 50, y: 50 }}
            />
            <EventCard
              id="2"
              title="Code-A-Pookalam"
              borderColor="border-blue-500/60"
              initialPosition={{ x: 200, y: 100 }}
            />
            <EventCard
              id="3"
              title="Devsprint"
              borderColor="border-teal-500/60"
              initialPosition={{ x: 350, y: 150 }}
            />
            <EventCard
              id="4"
              title="DebUtsav"
              borderColor="border-purple-500/60"
              initialPosition={{ x: 500, y: 200 }}
            />
            <EventCard
              id="5"
              title="Hacktoberfest"
              borderColor="border-orange-500/60"
              initialPosition={{ x: 650, y: 250 }}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Events;
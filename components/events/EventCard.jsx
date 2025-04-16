'use client';
import React, { useState } from 'react';
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
      <div className="relative rounded overflow-hidden w-[564px] h-[455px] [perspective:1000px]">
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

export default EventCard;
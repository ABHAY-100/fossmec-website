"use client";
import React, { useState, useRef } from "react";
import { MdFlip } from "react-icons/md";
import { TbGripVertical } from "react-icons/tb";

// Custom hook for drag functionality
const useDraggable = (initialPosition, onPositionChange) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!elementRef.current) return;
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    };
    
    setPosition(newPosition);
    if (onPositionChange) {
      onPositionChange(newPosition);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (onPositionChange) {
        onPositionChange(position);
      }
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);

  return {
    elementRef,
    position,
    handleMouseDown,
    isDragging
  };
};

export const EventCard = ({ title, borderColor, id, position, onDragEnd }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handlePositionChange = (newPosition) => {
    onDragEnd(id, newPosition);
  };

  const { elementRef, position: currentPosition, handleMouseDown, isDragging } = 
    useDraggable(position, handlePositionChange);

  return (
    <div
      ref={elementRef}
      className={`absolute transition-all duration-300 ${
        !isDragging ? 'hover:-translate-y-2 hover:scale-105' : ''
      }`}
      onMouseDown={handleMouseDown}
      style={{
        left: currentPosition.x,
        top: currentPosition.y,
        width: "400px",
        height: "320px",
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1000 : 1,
        cursor: isDragging ? "grabbing" : "grab",
        transform: isDragging ? 'none' : undefined
      }}
    >
      <div className="relative rounded overflow-hidden w-full h-full [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <div
              className={`w-full h-full bg-[#121f38]/80 border rounded ${borderColor}`}
            >
              <div className="h-3/4">
                <img
                  src="/assets/events/eventcard.jpeg"
                  alt="Event background"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
              <div className="p-4 relative">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl text-white font-uncut-sans">
                    {title}
                  </h3>
                  <div className="cursor-move">
                    <TbGripVertical className="text-white text-xl" />
                  </div>
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
            <div
              className={`w-full h-full bg-[#121f38] border ${borderColor}`}
            >
              <div className="flex items-center justify-center h-full p-4 relative">
                <h3 className="text-3xl text-white font-uncut-sans">
                  Hello FOSSMEC!
                </h3>
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

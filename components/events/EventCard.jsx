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
      className="relative"
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: currentPosition.x,
        top: currentPosition.y,
        width: typeof window !== 'undefined' && window.innerWidth < 768 ? "calc(100vw - 40px)" : "400px",
        height: typeof window !== 'undefined' && window.innerWidth < 768 ? "300px" : "320px",
        opacity: isDragging ? 0.8 : 1,
        zIndex: isDragging ? 1000 : 1,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <div className="relative w-full h-full [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <div className="w-full h-full flex flex-col justify-between pt-6 px-6 pb-3.5 group items-center transition-all duration-[0.75s] border border-white/10 hover:border-[#ACAB4F]/38 relative before:absolute before:min-h-[10px] before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 hover:after:border-[#ACAB4F] before:border-t-[3px] before:border-l-[3px] before:top-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-t-[3px] after:border-r-[3px] after:top-[-2px] after:right-[-2px] backdrop-blur-[1px] bg-[#121f38]/80">
              <div className="absolute h-full w-full before:absolute before:min-h-[10px] z-20 top-0 before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 group-hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 group-hover:after:border-[#ACAB4F] before:border-b-[3px] before:border-l-[3px] before:bottom-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-b-[3px] after:border-r-[3px] after:bottom-[-2px] after:right-[-2px]" />
              <div className="h-[75%] w-full relative">
                <img
                  src="/assets/events/eventcard.jpeg"
                  alt="Event background"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
              <div className="relative w-full flex justify-between items-center mt-4">
                <h2 className="font-uncut-sans font-medium text-[18px] leading-[20px] tracking-[0px] text-white/80">
                  {title}
                </h2>
                <div className="cursor-move text-white/80">
                  <TbGripVertical className="text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="w-full h-full flex flex-col justify-between pt-6 px-6 pb-3.5 group items-center transition-all duration-[0.75s] border border-white/10 hover:border-[#ACAB4F]/38 relative before:absolute before:min-h-[10px] before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 hover:after:border-[#ACAB4F] before:border-t-[3px] before:border-l-[3px] before:top-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-t-[3px] after:border-r-[3px] after:top-[-2px] after:right-[-2px] backdrop-blur-[1px] bg-[#121f38]">
              <div className="absolute h-full w-full before:absolute before:min-h-[10px] z-20 top-0 before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 group-hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 group-hover:after:border-[#ACAB4F] before:border-b-[3px] before:border-l-[3px] before:bottom-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-b-[3px] after:border-r-[3px] after:bottom-[-2px] after:right-[-2px]" />
              <div className="relative grow w-full flex flex-col items-center justify-center">
                <h3 className="text-2xl text-white/80 font-uncut-sans">
                  Hello FOSSMEC!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="absolute bottom-4 right-4 text-white/80 hover:text-white transition-colors z-30"
      >
        <MdFlip size={20} />
      </button>
    </div>
  );
};

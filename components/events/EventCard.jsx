"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MdFlip } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import Image from "next/image";

// Custom hook for drag functionality
const useDraggable = (initialPosition, onPositionChange) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!elementRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const startPos = { x: clientX, y: clientY };
    setStartPosition(startPos);
    setDragOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });
    setIsDragging(true);
    setHasMoved(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    // Check if the mouse has moved significantly to determine if it's a drag
    const moveDistance = Math.sqrt(
      Math.pow(clientX - startPosition.x, 2) +
        Math.pow(clientY - startPosition.y, 2)
    );

    // If moved more than 5 pixels, consider it a drag
    if (moveDistance > 5) {
      setHasMoved(true);
    }

    const newPosition = {
      x: clientX - dragOffset.x,
      y: clientY - dragOffset.y,
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
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, position, startPosition]);

  return {
    elementRef,
    position,
    handleMouseDown,
    isDragging,
    hasMoved,
  };
};

export const EventCard = ({
  title,
  borderColor,
  id,
  position,
  onDragEnd,
  image,
  onCardClick,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handlePositionChange = (newPosition) => {
    if (onDragEnd) {
      onDragEnd(id, newPosition);
    }
  };

  const {
    elementRef,
    position: currentPosition,
    handleMouseDown,
    isDragging,
    hasMoved,
  } = useDraggable(position || { x: 0, y: 0 }, handlePositionChange);

  const isInCarousel = !onDragEnd || position === undefined;

  const handleFlipClick = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handleCardClick = (e) => {
    // Only navigate if the user didn't drag
    if (!isInCarousel && !hasMoved) {
      router.push(`/events/${id}`);
    } else if (isInCarousel) {
      // For carousel mode (mobile), always navigate on click
      router.push(`/events/${id}`);
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative ${
        isInCarousel ? "w-full h-full cursor-pointer" : ""
      }`}
      onMouseDown={!isInCarousel ? handleMouseDown : undefined}
      onTouchStart={!isInCarousel ? handleMouseDown : undefined}
      onClick={handleCardClick}
      style={
        isInCarousel
          ? {}
          : {
              position: "absolute",
              left: currentPosition.x,
              top: currentPosition.y,
              width: "400px",
              height: "320px",
              opacity: isDragging ? 0.8 : 1,
              zIndex: isDragging ? 1000 : 1,
              cursor: isDragging
                ? "grabbing"
                : hasMoved
                ? "grab"
                : onCardClick
                ? "pointer"
                : "grab",
            }
      }
    >
      <div className="relative w-full h-full [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <div className="w-full h-full flex flex-col justify-between pt-6 px-6 pb-3.5 group items-center transition-all duration-[0.75s] border border-white/10 hover:border-[#ACAB4F]/38 relative before:absolute before:min-h-[10px] before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 hover:after:border-[#ACAB4F] before:border-t-[3px] before:border-l-[3px] before:top-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-t-[3px] after:border-r-[3px] after:top-[-2px] after:right-[-2px] backdrop-blur-[1px] bg-[#121f38]">
              <div className="absolute h-full w-full before:absolute before:min-h-[10px] z-20 top-0 before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 group-hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 group-hover:after:border-[#ACAB4F] before:border-b-[3px] before:border-l-[3px] before:bottom-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-b-[3px] after:border-r-[3px] after:bottom-[-2px] after:right-[-2px]" />
              <div className="h-[75%] w-full relative">
                <Image
                  src={image}
                  alt="Event background"
                  className="w-full h-full object-cover"
                  draggable="false"
                  width={400}
                  height={320}
                />
              </div>
              <div className="relative w-full flex justify-between items-center mt-4">
                <h2 className="font-uncut-sans font-medium text-[18px] leading-[20px] tracking-[0px] text-white/80">
                  {title}
                </h2>
                {!isFlipped && (
                  <div
                    className="py-2 px-3 rounded-md text-white/80 z-20 cursor-pointer bg-white/[.06]"
                    onClick={handleFlipClick}
                  >
                    <RxUpdate className="text-xl" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="w-full h-full flex flex-col justify-between pt-6 px-6 pb-3.5 group items-center transition-all duration-[0.75s] border border-white/10 hover:border-[#ACAB4F]/38 relative before:absolute before:min-h-[10px] before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 hover:after:border-[#ACAB4F] before:border-t-[3px] before:border-l-[3px] before:top-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-t-[3px] after:border-r-[3px] after:top-[-2px] after:right-[-2px] backdrop-blur-[1px] bg-[#121f38]">
              <div className="absolute h-full w-full before:absolute before:min-h-[10px] z-20 top-0 before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 group-hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 group-hover:after:border-[#ACAB4F] before:border-b-[3px] before:border-l-[3px] before:bottom-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-b-[3px] after:border-r-[3px] after:bottom-[-2px] after:right-[-2px]" />
              <div className="relative grow w-full flex flex-col items-center justify-center px-4">
                <p className="text-base text-white/80 font-uncut-sans leading-tight text-center">
                  {backContent}
                </p>
              </div>
              {isFlipped && (
                <div
                  className="py-2 px-3 rounded-md text-white/80 z-20 cursor-pointer bg-white/[.06] ml-auto"
                  onClick={handleFlipClick}
                >
                  <RxUpdate className="text-xl" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <button
        onClick={handleFlipClick}
        className="absolute bottom-4 right-4 md:bottom-4 md:right-4 sm:bottom-3 sm:right-3 text-white/80 hover:text-white transition-colors z-30 p-2"
        aria-label="Flip card"
      >
        <MdFlip size={isInCarousel ? 20 : 24} />
      </button> */}
    </div>
  );
};

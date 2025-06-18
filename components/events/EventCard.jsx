"use client";
import React, { useState, useRef } from "react";
import { MdFlip } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import Image from "next/image";

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
      y: e.clientY - position.y,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
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
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, position]);

  return {
    elementRef,
    position,
    handleMouseDown,
    isDragging,
  };
};

export const EventCard = ({
  title,
  borderColor,
  id,
  position,
  onDragEnd,
  image,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
  } = useDraggable(position || { x: 0, y: 0 }, handlePositionChange);

  const getBackContent = (id) => {
    switch (id) {
      case 2:
        return "Code a Pookalam'24 was a collaborative event by FOSSMEC and TinkerHub MEC, focused on blending programming skills with Onam's creative spirit. Open to all colleges with a 6K prize pool, the event ran from September 16-21, 2024.";
      case 4:
        return "DebUtsav 2024 adopted an unconference format, moving away from traditional talks and workshops. The event featured two tracks: a workshop on “Packaging in Debian: Footpaths to Being a Debian Maintainer” and hands-on contribution sprints, where groups of five collaborated with experienced Debian contributors to make direct contributions to the Debian project.";
      case 1:
        return "Representatives from FOSSMEC actively participated in IndiaFOSS 4.0, a prestigious Free and Open Source Software (FOSS) conference held in Bangalore on September 7th and 8th, 2024. The event provided an excellent platform for FOSSMEC to showcase its initiatives and engage with the broader FOSS community.";
      case 5:
        return "FOSSMEC hosted PravApp's genesis conference at Govt. Model Engineering College on 1st and 2nd March, where speaker sessions and small contribution sprints were conducted, sessions mostly focused on privacy-focused messaging, the Fediverse, and the origins of Prav. In short PravConf was a gathering of users, developers and volunteers in the Prav cooperative aiming to free users from vendor lock-in and invasion of privacy.";
      case 3:
        return "FOSSMEC hosted Build It Up on August 21–22 at CCF Hall, attracting 75 participants. Led by Joel K George (intern at ragas.io), the session guided attendees through building a full-stack web app using Next.js and Supabase. Designed for all skill levels, it offered hands-on learning in JavaScript and SQL with a focus on simplicity and engagement.";
      case 6:
        return "FOSSMEC conducted Let's Git It on February 5–6 at CCF Hall with 75 participants. Led by Lisa V Cherian (GitHub Campus Expert) and Karthik G Kumar (FOSSMEC Secretary), the session simplified Git and GitHub for all skill levels. Attendees explored version control through hands-on learning, including Git setup and GitHub account creation, gaining essential skills for collaborative coding.";
      case 7:
        return "Codeum Reparo is a two-round coding competition that challenges participants to debug and optimize web-based solutions, conducted in collaboration with Excel 2024.";
      default:
        return "Hello FOSSMEC!";
    }
  };

  const isInCarousel = !onDragEnd || position === undefined;

  const handleFlipClick = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={elementRef}
      className={`relative ${isInCarousel ? "w-full h-full" : ""}`}
      onMouseDown={!isInCarousel ? handleMouseDown : undefined}
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
              cursor: isDragging ? "grabbing" : "grab",
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
                  {getBackContent(id)}
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

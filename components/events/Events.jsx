"use client";
import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMediaQuery from "@/hooks/use-media-query";
import IndiaFoss from "@/assets/events/IndiaFOSS.jpeg";
import CodeAPookalam from "@/assets/events/CodeAP.jpeg";
import BuildItUp from "@/assets/events/BuildItUp.jpeg";
import DebUtsav from "@/assets/events/Debutsav.JPG";
import PravConf from "@/assets/events/Prav.jpeg";
import LetGitIt from "@/assets/events/GitIt.jpeg";
import CodeumReparo from "@/assets/events/CR.jpeg";

const Events = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getInitialPositions = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [
        { x: 20, y: 20 },    // mobile positions
        { x: 20, y: 370 },   
        { x: 20, y: 720 },
        { x: 20, y: 1070 },
        { x: 20, y: 1420 },
        { x: 20, y: 1770 },
        { x: 20, y: 2120 },
      ];
    }
   
    return [
      { x: 20, y: 20 },     
      { x: 140, y: 60 },    
      { x: 260, y: 100 },    
      { x: 380, y: 140 },    
      { x: 500, y: 180 },    
      { x: 620, y: 220 },    
      { x: 740, y: 260 },    
    ];
  };

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "IndiaFoss 4.0",
      borderColor: "border-yellow-500/60",
      position: getInitialPositions()[0],
      image: IndiaFoss,
    },
    {
      id: 2,
      title: "Code-A-Pookalam",
      borderColor: "border-blue-500/60",
      position: getInitialPositions()[1],
      image: CodeAPookalam,
    },
    {
      id: 3,
      title: "Build It Up",
      borderColor: "border-teal-500/60",
      position: getInitialPositions()[2],
      image: BuildItUp,
    },
    {
      id: 4,
      title: "DebUtsav",
      borderColor: "border-purple-500/60",
      position: getInitialPositions()[3],
      image: DebUtsav,
    },
    {
      id: 5,
      title: "PravConf",
      borderColor: "border-orange-500/60",
      position: getInitialPositions()[4],
      image: PravConf,
    },
    {
      id: 6,
      title: "Let's Git It",
      borderColor: "border-yellow-500/60",
      position: getInitialPositions()[5],
      image: LetGitIt,
    },
    {
      id: 7,
      title: "Codeum Reparo",
      borderColor: "border-blue-500/60",
      position: getInitialPositions()[6],
      image: CodeumReparo,
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      const newPositions = getInitialPositions();
      setCards((prevCards) =>
        prevCards.map((card, index) => ({
          ...card,
          position: newPositions[index],
        }))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (id, newPosition) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            position: newPosition,
          };
        }
        return card;
      })
    );
  };

  return (
    <div className="min-h-screen relative px-4 md:px-8 flex flex-col" id="events">

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full py-8">
        <h2 className="text-3xl md:text-4xl font-semibold italic uppercase text-left px-2 sm:px-16 lg:px-28 mt-25 mb-6 font-uncut-sans tracking-tight leading-none bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC] bg-clip-text text-transparent">
          &lt;What abt events?&gt;
        </h2>

        <p className="font-dm-mono text-white text-lg md:text-2xl mx-auto mb-8 font-normal tracking-tight leading-[120%] max-w-[1000px] mt-10 px-4 text-left">
          Our events focus on open source, featuring expert talks, practical
          workshops, and collaborative spaces for students and tech enthusiasts.
        </p>

        <div className="relative mt-8">
          {isMobile ? (
            <div className="px-2">
              <Carousel className="w-full">
                <CarouselContent>
                  {cards.map((card) => (
                    <CarouselItem key={card.id} className="w-full">
                      <div className="p-1 flex items-center justify-center h-[320px]">
                        <EventCard
                          id={card.id}
                          title={card.title}
                          borderColor={card.borderColor}
                          position={{ x: 0, y: 0 }}
                          onDragEnd={null}
                          image={card.image}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="static mx-2 transform-none" />
                  <CarouselNext className="static mx-2 transform-none" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[600px]">
              {cards.map((card) => (
                <EventCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  borderColor={card.borderColor}
                  position={card.position}
                  onDragEnd={handleDragEnd}
                  image={card.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
"use client";
import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard";
import Image from "next/image";
import bg from "@/assets/bg.svg";

const Events = () => {
  const getInitialPositions = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [
        { x: 20, y: 50 },
        { x: 20, y: 400 },
        { x: 20, y: 750 },
        { x: 20, y: 1100 },
        { x: 20, y: 1450 },
      ];
    }
    return [
      { x: 50, y: 50 },
      { x: 200, y: 100 },
      { x: 350, y: 150 },
      { x: 500, y: 200 },
      { x: 650, y: 250 },
    ];
  };

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Genisis",
      borderColor: "border-yellow-500/60",
      position: getInitialPositions()[0],
    },
    {
      id: 2,
      title: "Code-A-Pookalam",
      borderColor: "border-blue-500/60",
      position: getInitialPositions()[1],
    },
    {
      id: 3,
      title: "Devsprint",
      borderColor: "border-teal-500/60",
      position: getInitialPositions()[2],
    },
    {
      id: 4,
      title: "DebUtsav",
      borderColor: "border-purple-500/60",
      position: getInitialPositions()[3],
    },
    {
      id: 5,
      title: "Hacktoberfest",
      borderColor: "border-orange-500/60",
      position: getInitialPositions()[4],
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
      <Image src={bg} alt="bg" fill className="object-cover" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full py-8">
        <h2 className="text-3xl md:text-4xl font-semibold italic uppercase mx-auto text-center mt-25 mb-6 font-uncut-sans-var tracking-tight leading-none bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC] bg-clip-text text-transparent">
          &lt;What abt events?&gt;
        </h2>

        <p className="font-dm-mono text-white text-lg md:text-2xl mx-auto mb-8 font-normal tracking-tight leading-[120%] max-w-[1000px] mt-10 px-4 text-center">
          Our events focus on open source, featuring expert talks, practical
          workshops, and collaborative spaces for students and tech enthusiasts.
        </p>

        <div className="relative min-h-[600px] mt-8 md:min-h-[800px] lg:min-h-[600px]">
          {cards.map((card) => (
            <EventCard
              key={card.id}
              id={card.id}
              title={card.title}
              borderColor={card.borderColor}
              position={card.position}
              onDragEnd={handleDragEnd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
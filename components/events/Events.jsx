"use client";
import React, { useState } from "react";
import { EventCard } from "./EventCard";
import Image from "next/image";
import bg from "@/assets/bg.svg";

const Events = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Genisis",
      borderColor: "border-yellow-500/60",
      position: { x: 50, y: 50 },
    },
    {
      id: 2,
      title: "Code-A-Pookalam",
      borderColor: "border-blue-500/60",
      position: { x: 200, y: 100 },
    },
    {
      id: 3,
      title: "Devsprint",
      borderColor: "border-teal-500/60",
      position: { x: 350, y: 150 },
    },
    {
      id: 4,
      title: "DebUtsav",
      borderColor: "border-purple-500/60",
      position: { x: 500, y: 200 },
    },
    {
      id: 5,
      title: "Hacktoberfest",
      borderColor: "border-orange-500/60",
      position: { x: 650, y: 250 },
    },
  ]);

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
    <div className="h-screen relative px-8 flex flex-col" id="events">
      <Image src={bg} alt="bg" fill className="object-cover" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full py-8">
        <h2 className="text-4xl font-semibold italic uppercase mx-auto text-center mt-25 mb-6 font-uncut-sans-var tracking-tight leading-none bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC] bg-clip-text text-transparent">
          &lt;What abt events?&gt;
        </h2>

        <p className="font-dm-mono text-white text-2xl mx-auto mb-8 font-normal tracking-tight leading-[120%] max-w-[1000px] mt-10">
          Our events focus on open source, featuring expert talks, practical
          workshops, and collaborative spaces for students and tech enthusiasts.
        </p>
        
        <div className="relative min-h-[600px] mt-8">
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
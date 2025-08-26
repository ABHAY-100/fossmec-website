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
import { bucketBase, supabase } from "@/lib/supabase";

const Events = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [cards, setCards] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState("all");

  const getInitialPositions = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [
        { x: 20, y: 20 }, // mobile positions
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

  // Fetch events from Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('id', { ascending: true });

        if (error) {
          throw error;
        }

        if (data) {
          // Map Supabase data to card format with positions
          const positions = getInitialPositions();
          const mappedEvents = data.map((event, index) => ({
            id: event.id,
            title: event.name,
            borderColor: getBorderColor(index),
            position: positions[index] || { x: 20, y: 20 + (index * 60) },
            image: `${bucketBase}/${event.year}/${event.cover_image}`,
            backContent: event.event_short_desc,
            year: event.year,
          }));
          
          setAllEvents(mappedEvents);
          setCards(mappedEvents);
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to assign border colors based on index
  const getBorderColor = (index) => {
    const colors = [
      "border-yellow-500/60",
      "border-blue-500/60", 
      "border-teal-500/60",
      "border-purple-500/60",
      "border-orange-500/60",
      "border-yellow-500/60",
      "border-blue-500/60",
    ];
    return colors[index % colors.length];
  };

  // Function to filter events by year
  const filterEventsByYear = (year) => {
    setSelectedYear(year);
    const filtered = allEvents.filter(event => event.year === parseInt(year));
    setCards(filtered);
  };

  // Get unique years from events
  const getUniqueYears = () => {
    const years = [...new Set(allEvents.map(event => event.year))].sort((a, b) => b - a);
    return years;
  };

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

  // Update positions when cards change (due to filtering)
  useEffect(() => {
    if (cards.length > 0) {
      const newPositions = getInitialPositions();
      setCards((prevCards) =>
        prevCards.map((card, index) => ({
          ...card,
          position: newPositions[index] || { x: 20, y: 20 + (index * 60) },
        }))
      );
    }
  }, [cards.length]);

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
    <div
      className="min-h-screen relative px-4 md:px-8 flex flex-col"
      id="events"
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col h-full py-8">
        <h2 className="text-3xl md:text-4xl font-semibold italic uppercase text-left px-2 mt-25 mb-6 font-uncut-sans tracking-tight leading-none bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC] bg-clip-text text-transparent">
          &lt;WHAT ABOUT EVENTS?&gt;
        </h2>

        {!loading && allEvents.length > 0 && (
          <div className="flex mb-8 px-4">
            <select 
              value={selectedYear}
              onChange={(e) => filterEventsByYear(e.target.value)}
              className="bg-transparent border-2 border-[#379CA2] rounded-md px-4 py-2 text-[#DAE2E9E0] focus:outline-none focus:border-[#C0AE42] transition-colors cursor-pointer font-martian-mono"
            >
              {getUniqueYears().map((year) => (
                <option 
                  key={year} 
                  value={year.toString()}
                  className="bg-[#1a1a1a] text-[#DAE2E9E0]"
                >
                  Events {year}
                </option>
              ))}
            </select>
          </div>
        )}

        <p className="font-dm-mono text-white text-lg md:text-2xl mx-auto mb-8 font-normal tracking-tight leading-[120%] max-w-[1000px] mt-10 px-4 text-left">
          Our events focus on FOSS, featuring expert talks, practical workshops,
          and collaborative spaces for students and tech enthusiasts.
        </p>

        {/* Year Filter Dropdown */}
        <div className="relative mt-8">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                <p className="text-white font-dm-mono text-lg">Loading events...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-red-400 font-dm-mono text-lg mb-4">Error loading events</p>
                <p className="text-white/70 font-dm-mono text-sm">{error}</p>
              </div>
            </div>
          ) : cards.length === 0 ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-white/70 font-dm-mono text-lg">No events found</p>
              </div>
            </div>
          ) : (
            <>
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
                      backContent={card.backContent}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;

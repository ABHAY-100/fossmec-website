"use client";
import React, { useState } from "react";
import About from "@/components/About";
import Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import LenisWrapper from "@/components/LenisWrapper";
import EventModal from "@/components/events/EventModal";
import bg from "@/assets/bg.svg";
import Image from "next/image";

const page = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventModal = (event) => {
    setSelectedEvent(event);
    // Scroll to event details section after a short delay to ensure it's rendered
    setTimeout(() => {
      document.getElementById("event-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="flex flex-col font-dm-mono overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar selectedEvent={selectedEvent} />
      </div>
      <div>
        {/* <LenisWrapper> */}
        <div className="relative min-h-screen">
          <div className="fixed inset-0 z-0">
            <Image
              src={bg}
              alt="bg"
              fill
              className="object-cover max-h-screen z-[-1]"
            />
          </div>

          <Landing />
          <About />
          <Events
            onEventClick={openEventModal}
            selectedEvent={selectedEvent}
            onCloseEvent={closeEventModal}
          />
          <Team />
          <Marquee />
        </div>
        {/* </LenisWrapper> */}
      </div>
      <Footer />
    </div>
  );
};

export default page;

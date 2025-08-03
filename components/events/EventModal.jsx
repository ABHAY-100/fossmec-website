"use client";
import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const EventModal = ({ isOpen, onClose, event }) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const getEventDescription = (id) => {
    switch (id) {
      case 2:
        return "Code a Pookalam'24 was a collaborative event by FOSSMEC and TinkerHub MEC, focused on blending programming skills with Onam's creative spirit. Open to all colleges with a 6K prize pool, the event ran from September 16-21, 2024.";
      case 4:
        return "DebUtsav 2024 adopted an unconference format, moving away from traditional talks and workshops. The event featured two tracks: a workshop on 'Packaging in Debian: Footpaths to Being a Debian Maintainer' and hands-on contribution sprints, where groups of five collaborated with experienced Debian contributors to make direct contributions to the Debian project.";
      case 1:
        return "Representatives from FOSSMEC actively participated in IndiaFOSS 4.0, a prestigious Free and Open Source Software (FOSS) conference held in Bangalore on September 7th and 8th, 2024. The event provided an excellent platform for FOSSMEC to showcase its initiatives and engage with the broader FOSS community.";
      case 5:
        return "FOSSMEC hosted PravApp's genesis conference at Govt. Model Engineering College on 1st and 2nd March, where speaker sessions and small contribution sprints were conducted, sessions mostly focused on privacy-focused messaging, the Fediverse, and the origins of Prav. In short PravConf was a gathering of users, developers and volunteers in the Prav cooperative aiming to free users from vendor lock-in and invasion of privacy.";
      case 3:
        return "FOSSMEC hosted Build It Up on August 21–22 at CCF Hall, attracting 75 participants. Led by Joel K George (intern at ragas.io), the session guided attendees through building a full-stack web app using Next.js and Supabase. Designed for all skill levels, it offered hands-on learning in JavaScript and SQL with a focus of simplicity and engagement.";
      case 6:
        return "FOSSMEC conducted Let's Git It on February 5–6 at CCF Hall with 75 participants. Led by Lisa V Cherian (GitHub Campus Expert) and Karthik G Kumar (FOSSMEC Secretary), the session simplified Git and GitHub for all skill levels. Attendees explored version control through hands-on learning, including Git setup and GitHub account creation, gaining essential skills for collaborative coding.";
      case 7:
        return "Codeum Reparo is a two-round coding competition that challenges participants to debug and optimize web-based solutions, conducted in collaboration with Excel 2024.";
      default:
        return "Hello FOSSMEC!";
    }
  };

  const getEventOneline = (id) => {
    switch (id) {
      case 2:
        return "A collaborative coding event blending creativity with technology";
      case 4:
        return "An unconference format for Debian packaging and contributions";
      case 1:
        return "India's premier Free and Open Source Software conference";
      case 5:
        return "Privacy-focused messaging and Fediverse development conference";
      case 3:
        return "Full-stack web development workshop with Next.js and Supabase";
      case 6:
        return "Git and GitHub workshop for collaborative coding";
      case 7:
        return "Debugging and optimization coding competition";
      default:
        return "FOSSMEC community event";
    }
  };

  if (!isOpen || !event) return null;

  return (
    <div className="relative z-10 pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors duration-200 group
                       px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3
                       h-8 sm:h-10 md:h-12
                       rounded-lg sm:rounded-xl
                       bg-white/10 backdrop-blur-sm
                       w-auto"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-martian-mono text-xs sm:text-sm md:text-base whitespace-nowrap">
              Collapse
            </span>
          </button>

          {/* Title */}
          <h1 className="font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37.35px] leading-[32px] sm:leading-[38px] md:leading-[44px] lg:leading-[51.84px] tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.7px] lg:tracking-[-0.77px] align-middle uppercase font-martian-mono text-white">
            {event.title}
          </h1>

          {/* One Line Description */}
          <p className="font-normal text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20.2px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
            {getEventOneline(event.id)}
          </p>

          {/* Event Image */}
          <div className="relative w-full aspect-video overflow-hidden">
            <div
              className="inset-0 bg-white/10 relative w-full h-full group transition-all duration-[0.75s] border border-white/10 backdrop-blur-[3px]
              before:absolute before:h-[8px] before:w-[8px] sm:before:h-[10px] sm:before:w-[10px] md:before:h-[12px] md:before:w-[12px] before:border-[#ACAB4F] before:border-t-[3px] sm:before:border-t-[3px] md:before:border-t-[4px] before:border-l-[3px] sm:before:border-l-[3px] md:before:border-l-[4px] before:top-[-2px] before:left-[-2px]
              after:absolute after:h-[8px] after:w-[8px] sm:after:h-[10px] sm:after:w-[10px] md:after:h-[12px] md:after:w-[12px] after:border-[#ACAB4F] after:border-t-[3px] sm:after:border-t-[3px] md:after:border-t-[4px] after:border-r-[3px] sm:after:border-r-[3px] md:after:border-r-[4px] after:top-[-2px] after:right-[-2px]"
            >
              {/* Bottom border corners */}
              <div
                className="absolute inset-0 
                before:absolute before:h-[8px] before:w-[8px] sm:before:h-[10px] sm:before:w-[10px] md:before:h-[12px] md:before:w-[12px] before:border-[#ACAB4F] before:border-b-[3px] sm:before:border-b-[3px] md:before:border-b-[4px] before:border-l-[3px] sm:before:border-l-[3px] md:before:border-l-[4px] before:bottom-[-2px] before:left-[-2px]
                after:absolute after:h-[8px] after:w-[8px] sm:after:h-[10px] sm:after:w-[10px] md:after:h-[12px] md:after:w-[12px] after:border-[#ACAB4F] after:border-b-[3px] sm:after:border-b-[3px] md:after:border-b-[4px] after:border-r-[3px] sm:after:border-r-[3px] md:after:border-r-[4px] after:bottom-[-2px] after:right-[-2px]"
              />

              {/* Image container with proper padding */}
              <div className="relative w-full h-full p-2 sm:p-3 md:p-4">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20.2px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
              {getEventDescription(event.id)}
            </p>
          </div>

          {/* Event Details */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-martian-mono font-semibold text-white mb-2 sm:mb-3">
              Event Details
            </h2>
            <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20.2px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
              This event was organized by FOSSMEC (Free and Open Source Software
              Club of Model Engineering College) as part of our ongoing
              commitment to promoting open source culture and collaborative
              development. The event took place at Government Model Engineering
              College, bringing together students, developers, and enthusiasts
              from the open source community to learn, share, and contribute to
              meaningful projects.
            </p>
          </div>

          {/* Infinite Scrolling Images */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden py-4 sm:py-6 md:py-8">
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex flex-shrink-0 space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 1"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 2"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 3"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 4"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 5"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 6"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex flex-shrink-0 space-x-2 sm:space-x-3 md:space-x-4 ml-2 sm:ml-3 md:ml-4">
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 1"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 2"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 3"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 4"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 5"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt="Gallery image 6"
                    width={256}
                    height={160}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import bg from "@/assets/bg.svg";
import { bucketBase, supabase } from "@/lib/supabase";

const EventDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const eventId = parseInt(params.id);
  
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to get 6 images for the gallery
  const getGalleryImages = () => {
    if (!event || !event.images) {
      // If no images, return 6 copies of the default image
      return Array(6).fill("/assets/events/CR.jpeg");
    }
    
    // If images is an array, use it
    if (Array.isArray(event.images)) {
      const images = [...event.images];
      let i = 0;
      while (images.length < 6) {
        images.push(images[i] || "/assets/events/CR.jpeg");
        i++;
      }
      return images.slice(0, 6);
    }
    
    // If images is a single string, duplicate it 6 times
    if (typeof event.images === 'string') {
      return Array(6).fill(event.images);
    }
    
    // Fallback to default image
    return Array(6).fill("/assets/events/CR.jpeg");
  };

  // Fetch event data from Supabase
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('id', eventId)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setEvent(data);
        } else {
          setError('Event not found');
        }
      } catch (err) {
        console.error('Error fetching event:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  const handleBackToEvents = () => {
    router.push("/#events");
    // Add a small delay to ensure navigation happens, then scroll
    setTimeout(() => {
      const eventsSection = document.getElementById("events");
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading event...</div>
      </div>
    );
  }

  // Error state
  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Event not found</div>
      </div>
    );
  }

  // Get the gallery images
  const galleryImages = getGalleryImages();

  return (
    <div className="flex flex-col font-dm-mono overflow-x-hidden min-h-screen">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <Image src={bg} alt="bg" fill className="object-cover" />
      </div>

      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          selectedEvent={event}
          onEventTitleClick={handleBackToEvents}
          isEventPage={true}
        />
      </div>

      {/* Event content */}
      <div className="relative z-10 pt-20 pb-4 sm:pb-6 md:pb-8 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {/* Back Button */}
            <button
              onClick={handleBackToEvents}
              className="flex items-center gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors duration-200 group
                         px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3
                         h-8 sm:h-10 md:h-12
                         rounded-lg sm:rounded-xl
                         bg-white/10 backdrop-blur-sm
                         w-auto"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-martian-mono text-xs sm:text-sm md:text-base whitespace-nowrap">
                Back to Events
              </span>
            </button>

            {/* Title */}
            <h1 className="font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37.35px] leading-[32px] sm:leading-[38px] md:leading-[44px] lg:leading-[51.84px] tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.7px] lg:tracking-[-0.77px] align-middle uppercase font-martian-mono text-white">
              {event.name}
            </h1>

            {/* One Line Description */}
            <p className="font-normal text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20.2px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
              {event.event_oneline}
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
                  after:absolute after:h-[8px] after:w-[8px] sm:after:h-[10px] sm:after:w-[10px] md:after:h-[12px] md:after:w-[12px] after:border-[#ACAB4F] after:border-b-[3px] sm:after:border-b-[3px] md:after:border-r-[3px] sm:after:border-r-[3px] md:after:border-r-[4px] after:bottom-[-2px] after:right-[-2px]"
                />

                {/* Image container with proper padding */}
                <div className="relative w-full h-full p-2 sm:p-3 md:p-4">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={bucketBase + event.year + "/" + event.cover_image}
                      alt={event.name}
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
                {event.event_short_desc}
              </p>
            </div>

            {/* Event Details */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-martian-mono font-semibold text-white mb-2 sm:mb-3">
                Event Details
              </h2>
              <div className="space-y-2">
                {event.year && (
                  <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20.2px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
                    <span className="text-white">Year:</span> {event.year}
                  </p>
                )}
                {event.event_venue && (
                  <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20.2px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
                    <span className="text-white">Venue:</span> {event.event_venue}
                  </p>
                )}
                <br/>
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20.2px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32.64px] tracking-[0px] text-[#ABA9A7] font-martian-mono">
                  {event.event_content &&
                    event.event_content.split('\n').map((line, idx) => (
                      <span key={idx} >
                        {line}
                        <br />
                      </span>
                    ))
                  }
                </p>
              </div>
            </div>

            {/* Infinite Scrolling Images */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden py-4 sm:py-6 md:py-8">
              <div className="flex animate-scroll">
                {/* First set of images */}
                <div className="flex flex-shrink-0 space-x-2 sm:space-x-3 md:space-x-4">
                  {galleryImages.map((imageSrc, index) => (
                    <div key={index} className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                      <Image
                        src={bucketBase + event.year + "/" + imageSrc}
                        alt={`Gallery image ${index + 1}`}
                        width={256}
                        height={160}
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex flex-shrink-0 space-x-2 sm:space-x-3 md:space-x-4 ml-2 sm:ml-3 md:ml-4">
                  {galleryImages.map((imageSrc, index) => (
                    <div key={`dup-${index}`} className="w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 bg-gray-800 rounded-lg overflow-hidden">
                      <Image
                        src={bucketBase + event.year + "/" + imageSrc}
                        alt={`Gallery image ${index + 1}`}
                        width={256}
                        height={160}
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

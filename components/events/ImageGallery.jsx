"use client";
import React from "react";
import Image from "next/image";
import { EVENTS } from "@/constants";

const ImageGallery = () => {
  const images = EVENTS[0].gallery;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2"
            style={{ height: "200px" }}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              height={200}
              width={300} // Provide a default width, it will be adjusted by the object-fit property
              className="object-cover h-full w-auto grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

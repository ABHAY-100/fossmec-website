import React from "react";
import landingBg from "../assets/landing_bg.svg";
import Image from "next/image";

const Landing = () => {
  return (
    <div
      className="min-h-screen flex z-10 flex-col items-center justify-center relative bg-our-bg"
      id="home"
    >
      <div className="absolute -top-2 left-0 inset-0 z-[0] overflow-hidden">
        <Image
          src={landingBg}
          alt="Background image"
          fill
          className="object-cover"
        />
      </div>

      <div className="z-10 max-w-[85%] w-full px-4 flex flex-col items-start">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[100px] font-uncut-sans font-extrabold leading-[120px]">
            OPEN SOURCE
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[100px] font-uncut-sans font-extrabold leading-none mt-[-0.1em]">
            SOFTWARE FOUNDATION
          </h1>
        </div>

        <p className="text-sm md:text-sm lg:text-md xl:text-[18px] font-dm-mono italic mt-5 leading-[32px] max-w-9/12 uppercase text-[#DAE2E9E0] opacity-88">
          FOSS MEC IS A NON-PROFIT FOUNDATION THAT AIMS AT PROMOTING AND
          STRENGTHENING THE FREE AND OPEN SOURCE SOFTWARE (FOSS) ECOSYSTEM AMONG
          MECIANS
        </p>
      </div>
    </div>
  );
};

export default Landing;

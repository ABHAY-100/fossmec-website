import React from "react";
import Image from "next/image";

function TeamsCard({ img, name, position }) {
  return (
    <div className="aspect-[195.19/256.36] w-full flex flex-col justify-center items-center border border-white/38 relative before:absolute before:min-h-[10px] before:min-w-[10px] before:border-[#ACAB4F] before:border-t-[3px] before:border-l-[3px] before:top-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-[#ACAB4F] after:border-t-[3px] after:border-r-[3px] after:top-[-2px] after:right-[-2px] bg-white/6 backdrop-blur-[1px]">
      <div className="absolute h-full w-full before:absolute before:min-h-[10px] before:min-w-[10px] before:border-[#ACAB4F] before:border-b-[3px] before:border-l-[3px] before:bottom-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-[#ACAB4F] after:border-b-[3px] after:border-r-[3px] after:bottom-[-2px] after:right-[-2px]" />
      <Image src={img} alt="team" className="relative" />
      <div className="relative w-full flex justify-center items-center flex-col">
        <h2 className="font-uncut-sans font-medium text-[18px] leading-[20px] tracking-[0px] text-center align-middle uppercase text-white/80">{name}</h2>
        <h3 className="font-dm-mono font-normal text-[14px] leading-[20px] tracking-[0.3px] text-center align-middle text-white/54">{position}</h3>
      </div>
    </div>
  );
}

export default TeamsCard;

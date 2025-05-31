import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

function TeamsCard({ img, name, position }) {
  return (
    <div className="aspect-[195.19/256.36] relative overflow-hidden w-full before:w-full before:h-full before:bg-white/6 before:top-0 before:left-0 before:absolute before:-translate-y-full before:transition-all before:duration-[0.75s] hover:before:translate-y-0 transition-transform duration-300 hover:scale-105">
      <div className=" w-full h-full flex flex-col justify-between pt-6 px-6 pb-3.5 group items-center transition-all duration-[0.75s] border border-white/10 hover:border-[#ACAB4F]/38 relative before:absolute before:min-h-[10px] before:min-w-[10px]  before:transition-all before:duration-[0.75s] before:border-white/10 hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 hover:after:border-[#ACAB4F] before:border-t-[3px] before:border-l-[3px] before:top-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-t-[3px] after:border-r-[3px] after:top-[-2px] after:right-[-2px] backdrop-blur-[3px]">
        <div className="absolute h-full w-full before:absolute before:min-h-[10px] z-20 top-0 before:min-w-[10px] before:transition-all before:duration-[0.75s] before:border-white/10 group-hover:before:border-[#ACAB4F] after:transition-all after:duration-[0.75s] after:border-white/10 group-hover:after:border-[#ACAB4F] before:border-b-[3px] before:border-l-[3px] before:bottom-[-2px] before:left-[-2px] after:absolute after:h-[10px] after:w-[10px] after:border-b-[3px] after:border-r-[3px] after:bottom-[-2px] after:right-[-2px]" />
        <Image src={img || Logo} alt="team" className="relative object-cover max-h-[150px]" />
        <div className="relative w-full flex justify-center items-center flex-col grow">
          <h2 className="font-uncut-sans font-medium text-[18px] leading-[20px] tracking-[0px] text-center align-middle uppercase text-white/80">
            {name}
          </h2>
          <h3 className="font-dm-mono font-normal text-[12px] mt-1 min-h-[32px] relative tracking-[0.3px] text-center align-middle text-white/54">
            <span className="absolute text-center w-full min-w-[120px] mx-auto translate-x-[-50%]">{position}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TeamsCard;

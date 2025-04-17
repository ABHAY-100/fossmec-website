import React from "react";
import Image from "next/image";
import TeamsCard from "./TeamsCard";
import bg from "@/assets/bg.svg";
import IMG from "@/assets/Team/placeholder.png";
import { TEAM } from "@/constants";

const Team = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center relative justify-center"
      id="team"
    >
      <div className="w-full relative h-fit flex mt-40 text-center">
        <div className="xl:w-[20%] sm:w-[15%]" />
        <div className="w-full flex  justify-center sm:justify-start">
          <h1
            className={
              " font-uncut-sans-var font-semibold italic sm:text-start top-0 px-8 sm:px-16 lg:px-32 text-3xl md:text-4xl leading-[100%] tracking-[-0.04em] align-middle capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC]"
            }
          >
            {"<"}MEET THE TEAM!{">"}
          </h1>
        </div>
      </div>
      <div className="xl:h-20 lg:h-16 h-12" />
      <div className="grid lg:grid-cols-6 gap-8 xl:w-[70%] lg:w-[90%] md:w-[80%] md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-20 px-4">
        {TEAM.map((item) => (
          <TeamsCard
            key={item.id}
            img={item.img}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

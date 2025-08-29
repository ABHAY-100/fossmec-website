"use client";
import React, { useState } from "react";
import TeamsCard from "./TeamsCard";
import {
  TEAM2022,
  TEAM2023,
  TEAM2024,
  TEAM2021,
  TEAM2020,
  TEAM2025,
} from "@/constants";
import DrSonyP from "@/assets/Team/DrSonyP.png";
import NoImage from "@/assets/noimg.png";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const teamsByYear = {
    2025: TEAM2025,
    2024: TEAM2024,
    2023: TEAM2023,
    2022: TEAM2022,
    2021: TEAM2021,
    2020: TEAM2020,
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center relative justify-center mb-10"
      id="team"
    >
      <div className="w-full relative h-fit flex mt-40 text-center flex-col items-center">
        <h1
          className={
            "font-uncut-sans-var font-semibold italic sm:text-start top-0 px-8 sm:px-16 lg:px-32 text-3xl md:text-4xl leading-[100%] tracking-[-0.04em] align-middle capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC]"
          }
        >
          {"<"}MEET THE TEAM!{">"}
        </h1>
        <div className="w-fit mt-6 max-md:scale-90">
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent border-2 border-[#DAE2E9E0]/10 px-4 py-2 pr-12 text-[#DAE2E9E0] focus:outline-none transition-colors cursor-pointer appearance-none w-full"
            >
              {[...Object.keys(teamsByYear)].reverse().map((year) => (
                <option
                  key={year}
                  value={year}
                  className="bg-[#1a1a1a] text-[#DAE2E9E0]"
                >
                  Core {year}
                </option>
              ))}
            </select>
            <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-[19px] h-[19px] text-[#DAE2E9E0]/70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:h-20 lg:h-16 h-12" />
      <div className="flex flex-wrap justify-center gap-6 w-full mb-20 max-w-[90%]">
        {teamsByYear[selectedYear].map((item) => (
          <TeamsCard
            key={item.id}
            img={item?.img}
            name={item.name}
            position={item.position}
            linkedin={item.linkedin}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

import React from "react";
import Image from "next/image";
import TeamsCard from "./TeamsCard";
import bg from "@/assets/bg.svg";
import IMG from "@/assets/Team/placeholder.png";
import { UncutSans } from "@/app/layout";

const gridData = [
  {
    id: 1,
    value: "Item 1",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 2,
    value: "Item 2",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 3,
    value: "Item 3",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 4,
    value: "Item 4",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 5,
    value: "Item 5",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 6,
    value: "Item 6",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 7,
    value: "Item 7",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 8,
    value: "Item 8",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 9,
    value: "Item 9",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 10,
    value: "Item 10",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 11,
    value: "Item 11",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
  {
    id: 12,
    value: "Item 12",
    name: "Nikhil M",
    position: "Chairperson",
    img: IMG,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col items-center relative justify-center ">
      <Image src={bg} alt="bg" fill className="object-cover" />
      <div className="w-full relative h-fit flex mt-40 text-center">
        <div className="xl:w-[20%] lg:w-[15%] sm:w-[10%]" />
        <h1
          className={
            " font-uncut-sans-var font-semibold italic w-full text-center sm:text-start top-0 lg:text-[48px] text-[35px]  leading-[100%] tracking-[-0.04em] align-middle capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#C0AE42] via-[#379CA2] to-[#2C7FDC]"
          }
        >
          {"<"}MEET THE TEAM!{">"}
        </h1>
      </div>
          <div className="xl:h-20 lg:h-16 h-12"/>
      <div className="grid lg:grid-cols-6 gap-8 xl:w-[70%] lg:w-[90%] md:w-[80%] md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-20">
        {gridData.map((item) => (
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


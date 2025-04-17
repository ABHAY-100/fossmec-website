import React from "react";
import Image from "next/image";
import bg from "@/assets/bg.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Main Section */}
      <div className="min-h-[calc(100vh-16.75rem)] md:min-h-[calc(100vh-15.10rem)] w-full flex flex-col items-center justify-center text-center py-16 z-10">
        <h2
          className="text-2xl md:text-4xl font-semibold italic leading-relaxed max-md:mx-2"
          style={{ wordSpacing: "-0.2rem" }}
        >
          Big ideas, cool projects, and
          <br /> great people. You in?
        </h2>

        {/* Button */}
        <a
          href="https://t.me/joinchat/_wHtSpuMBQxhODhl"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 scale-90 pt-3 w-[285px] h-[100px] bg-transparent border-2 border-white rounded-[25px] flex items-center justify-center pl-6 pr-6 overflow-hidden transition-all duration-500 ease-in-out hover:bg-white hover:w-[420px] max-sm:scale-75"
        >
          {/* Text Container */}
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Default Text */}
            <span className="[font-family:var(--font-offbit)] z-10 text-white text-6xl transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              Join Foss
            </span>

            {/* Hover Text */}
            <span className="[font-family:var(--font-offbit)] absolute group-hover:translate-x-[-45px] z-10 text-[#0C2444] text-6xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              Heck yeah!
            </span>
          </div>

          {/* GIF Slide In */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-120px] w-[80px] h-[72px] rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out group-hover:right-4 opacity-0 group-hover:opacity-100">
            <img
              src="/nod.gif"
              alt="join gif"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </a>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full h-[90px] max-md:h-fit relative z-10">
        <div className="absolute inset-0 backdrop-blur-[4px] bg-white/5 border-t border-t-[#FFFFFF29]" />
        <div
          className="relative z-20 font-dmMono max-w-[1500px] mx-auto flex flex-row max-md:flex-col
        max-md:gap-2 justify-between items-center space-y-4 text-sm text-white/55 font-medium h-full px-6 py-6 mt-1"
        >
          <p className="mb-4 md:mb-0 font-mono">
            🄯 2025 FOSS MEC - GPL v3 License
          </p>
          <div className="flex space-x-8 min-lg:pr-1">
            <a
              href="https://instagram.com/foss_mec"
              target="_blank"
              className="hover:text-white transition"
            >
              <span className="flex max-lg:hidden">Instagram</span>
              <AiFillInstagram className="h-5 w-5 max-lg:flex hidden" />
            </a>
            <a
              href="https://t.me/joinchat/_wHtSpuMBQxhODhl"
              target="_blank"
              className="hover:text-white transition"
            >
              <span className="flex max-lg:hidden">Telegram</span>
              <FaTelegramPlane className="h-5 w-5 max-lg:flex hidden" />
            </a>
            <a
              href="https://linkedin.com/company/fossmec"
              target="_blank"
              className="hover:text-white transition"
            >
              <span className="flex max-lg:hidden">LinkedIn</span>
              <FaLinkedin className="h-5 w-5 max-lg:flex hidden" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

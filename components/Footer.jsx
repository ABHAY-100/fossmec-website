import React from "react";
import Image from "next/image";
import bg from "@/assets/bg.svg";

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Grid Background */}
      <Image
        src={bg}
        alt="Background Grid"
        fill
        className="object-cover z-[-1]"
        priority
      />

      {/* Main Section */}
      <div className="min-h-[calc(100vh-264px)] w-full flex flex-col items-center justify-center text-center pt-16 z-10">
        <h2 className="text-2xl md:text-4xl font-semibold italic leading-relaxed">
          Big ideas, cool projects, and<br /> great people. You in?
        </h2>

        {/* Button */}
        <a
          href="https://t.me/joinchat/_wHtSpuMBQxhODhl"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 w-[250px] h-[100px] bg-[#F2F7FC] border-2 border-white rounded-[25px] flex items-center justify-center pl-6 pr-4 overflow-hidden transition-all duration-200 ease-in-out hover:bg-[#0C2444] hover:w-[300px]"
        >
          {/* Text */}
          <span className="[font-family:var(--font-gamja)] z-10 text-[#0C2444] group-hover:text-white text-5xl transition-all duration-300 ease-in-out transform group-hover:translate-x-[-50px]">
            join foss
          </span>

          {/* GIF Slide In */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-120px] w-[80px] h-[72px] rounded-[10px] overflow-hidden group-hover:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <img
              src="/join-hover.gif"
              alt="join gif"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </a>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full h-[130px] relative z-10">
        <div className="absolute inset-0 backdrop-blur-lg bg-white/5 border-t border-t-[#FFFFFF29]" />
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 text-sm text-gray-300 h-full px-6 py-6">
          <p className="mb-4 md:mb-0 font-mono">
            FOSS MEC – We build. We share. We learn.
          </p>
          <div className="flex space-x-6 font-mono">
            <a
              href="https://instagram.com/foss_mec"
              target="_blank"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/fossmec"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/joinchat/_wHtSpuMBQxhODhl"
              target="_blank"
              className="hover:text-white transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
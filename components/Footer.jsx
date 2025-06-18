import React from "react";
import Image from "next/image";
import bg from "@/assets/bg.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMastodon } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://instagram.com/foss_mec",
      text: "Instagram",
      icon: AiFillInstagram,
    },
    {
      href: "https://t.me/joinchat/_wHtSpuMBQxhODhl",
      text: "Telegram",
      icon: FaTelegramPlane,
    },
    {
      href: "https://linkedin.com/company/fossmec",
      text: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/FOSSMEC",
      text: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://x.com/FossMecc",
      text: "X",
      icon: FaXTwitter,
    },
    {
      href: "https://mastodon.social/@FOSS_MEC",
      text: "Mastodon",
      icon: FaMastodon,
    },
  ];

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
          <div className="flex flex-col mb-4 md:mb-0 font-mono gap-2">
            <p>
              🄯 2025 FOSS MEC |{" "}
              <a
                target="_blank"
                href="https://github.com/FossMec/website"
                className="hover:text-[#FFD022]/[0.7] transition"
              >
                Free Open Source Forever
              </a>
            </p>
            <p>
              Contact Us:{" "}
              <a
                href="mailto:foss@mec.ac.in"
                className="hover:text-[#FFD022]/[0.7] transition"
              >
                foss@mec.ac.in
              </a>
            </p>
          </div>

          <div className="flex space-x-8 min-lg:pr-1">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <span className="flex max-lg:hidden">{social.text}</span>
                  <IconComponent className="h-5 w-5 max-lg:flex hidden" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

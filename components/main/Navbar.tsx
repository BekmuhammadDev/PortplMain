'use client';
import { FaInstagram, FaGithub, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

export const Socials = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/bekmuhammad2303?igsh=MXM5aG1tOWtuemZvNA==",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/BekmuhammadDev",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    link: "https://t.me/BekMuhammad88",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bekmuhammad-aripov-857ba0311/",
  },
];

// import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-wrap  items-center justify-between mx-auto">

        {/* Logo */}
        <a href="#about-me" className="flex items-center gap-2">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold text-sm md:text-lg text-gray-300 hidden sm:block">
            Bekmuhammad Dev
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-32 justify-between border border-[#7042f861] bg-[#0300145e] px-10 py-2 rounded-full text-gray-200  text-sm">
          <a href="#about-me" className="hover:text-white transition">About me</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 ml-auto md:ml-0 text-xl">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Navbar;

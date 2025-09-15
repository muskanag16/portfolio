"use client";
import React from "react";
import Img from "next/image"
import { HoverBorderGradient } from "../ui/hover-border-gradient";


export function HeroSectionContent() {
  return (
    <div className="mx-2 my-10 md:mx-40 md:my-15 flex md:flex-row space-y-8 items-center md:items-start">
      <div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2 hover:shadow-white/[0.65] hover:shadow-2xl"
        >
          <AceternityLogo />
          <span className="font-medium">FullStack Developer & Web Designer</span>
        </HoverBorderGradient>
        <div className="text-center md:text-left">
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400 text-4xl md:text-7xl font-bold'>SLEEK DESIGN</h1>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-200 text-4xl md:text-6xl font-bold'>X</h1>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 text-4xl md:text-7xl font-bold'>CLEAN CODE</h1>
        </div>
        <div className="w-[100%] sm:w-[45%] text-2xl text-center md:text-left text-gray-400">
          Greetings! This is Muskan -
          A full stack developer crafting sleek UIs, powerful backends, and seamless user experiences.
        </div>
      </div>
      <div className="">
        <Img src={"/girl.png"} width="1000" height="900" alt="Side illustration" />
      </div>
    </div>    
  );
}

const AceternityLogo = () => {
  return (  
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

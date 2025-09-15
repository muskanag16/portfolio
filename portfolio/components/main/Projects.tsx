"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedPinDemo } from "./AnimatedPin";

// SlideUp component
const SlideUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export function ProjectsCard() {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold max-w-5xl mx-auto text-center">
        Featured Projects
      </div>
      <p className="mx-auto mt-6 text-center text-sm sm:text-md md:text-lg text-white max-w-2xl">
        Building Scalable and Impactful Projects with Cutting-Edge Technologies
      </p>

      <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8">
        {/* Mind Stack */}
        <SlideUp delay={0}>
          <AnimatedPinDemo
            href={"https://github.com/muskanag16/hotel-booking"}
            title={"Hotel-Booking"}
            desc={
              "A modern, responsive hotel booking web application built with React, Tailwind CSS, and Vite. This project offers a sleek user interface, booking capabilities, and pages for rooms, restaurant, spa, and contact — ideal for luxury hospitality branding."
            }
            src="/Hotel-booking.png"
          />
        </SlideUp>

        {/* Waste Watchers */}
        <SlideUp delay={0.2}>
          <AnimatedPinDemo
            href={"https://github.com/muskanag16/job_portal02"}
            title={"Job_portal"}
            desc={
              "– A full-stack platform where recruiters can post/manage jobs and candidates can search, filter, and apply with resumes."
            }
            src="/Job_portal.png"
          />
        </SlideUp>

        {/* Report Crime */}
        <SlideUp delay={0.4}>
          <AnimatedPinDemo
            href={"https://github.com/muskanag16/Arogyapathiiitm"}
            title={"Mental Health"}
            desc={
              "Arogyapath blends technology and tradition to create a safe, inclusive, and personalized healing experience."
            }
            src="/mental.png"
          />
        </SlideUp>
      </div>
    </div>
  );
}


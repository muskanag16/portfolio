'use client';

import { useState, useRef } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {

  SiTailwindcss,
  SiShadcnui,
 
  SiJavascript,
  SiC,
  SiCplusplus,
  SiExpress,

  SiAirtable,
} from 'react-icons/si';
import { FiActivity } from 'react-icons/fi';
import { BiNetworkChart } from 'react-icons/bi';
import { motion, useInView } from 'framer-motion';

const techStack = [
  { name: 'C', icon: <SiC className="text-blue-500" />, category: 'Programming' },
  { name: 'C++', icon: <SiCplusplus className="text-blue-700" />, category: 'Programming' },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'Programming' },

  { name: 'React', icon: <FaReact className="text-cyan-400" />, category: 'Frontend' },
  
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, category: 'Frontend' },
  { name: 'ShadCN', icon: <SiShadcnui className="text-sky-300" />, category: 'Frontend' },
  { name: 'Aceternity UI', icon: <SiAirtable className="text-pink-400" />, category: 'Frontend' },
  { name: 'Framer Motion', icon: <FiActivity className="text-fuchsia-400" />, category: 'Animation' },
  
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" />, category: 'Backend' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, category: 'Backend' },
 
];

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const displayedTech = showAll
    ? [...techStack].reverse()
    : [...techStack].reverse().slice(0, 10);

  return (
    <section className="bg-black text-white py-12 px-6" id="tech-stack">
      <div className="max-w-5xl mx-auto md:mx-40 md:max-w-full text-center">
        <h2 className="text-4xl font-bold mb-4">Tools - Frameworks</h2>
        <p className="text-gray-400 mb-10">Technologies and Tools I Leverage to Build Scalable Solutions</p>
        <div
          ref={ref}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
        >
          {displayedTech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              exit={{ opacity: 0 }}
              className="bg-zinc-900 rounded-xl p-5 flex flex-col items-center justify-center shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all bg-gradient-to-t hover:from-gray hover:via-gray-800 hover:to-gray"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="font-semibold">{tech.name}</p>
              <p className="text-sm text-gray-500">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm font-medium text-gray-200 transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
}



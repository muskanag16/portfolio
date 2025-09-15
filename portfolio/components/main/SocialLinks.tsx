'use client'
import React from 'react';
import {  
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
} from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/muskan-agrawal-1593a42a7/', color: 'bg-[#0077B5]' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/muskanag16', color: 'bg-[#333333]' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://x.com/home', color: 'bg-[#1DA1F2]' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: '#', color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]' },

  ];

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4 text-white">Follow Me</h4>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            aria-label={`Follow on ${social.name}`}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:scale-110 transition-all duration-300 relative overflow-hidden"
          >
            <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${social.color}`}></span>
            <span className="relative text-white">{social.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
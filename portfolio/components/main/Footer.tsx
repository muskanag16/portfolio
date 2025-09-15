'use client'
import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-8 overflow-hidden">
      {/*  background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left side: Info and links */}
            <div className="space-y-12">
              <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <h2 className="text-3xl font-bold mb-6 text-white">{"Let's Connect"}</h2>
                <p className="text-gray-300 max-w-md mb-8">
                  {"I'm always interested in new projects and opportunities. Feel free to reach out, and I'll get back to you as soon as possible."}
                </p>
                
                {/* Contact info */}
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center">
                    <span className="w-8">📍</span>
                    <span>IIT Kota,Rajasthan</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8">📧</span>
                    <span>agrawalmuskan5885@gmail.com</span>
                  </p>
                </div>
              </div>
              

              {/* Social links */}
              <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <SocialLinks />
              </div>
            </div>
            
            {/* Right side: Contact form */}
            <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className={`text-gray-500 text-sm mt-6 md:mt-0 transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
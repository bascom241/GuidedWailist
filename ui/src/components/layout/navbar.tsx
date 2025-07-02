"use client"
import React from 'react';
import image from "../../../public/Guided_Logo-removebg-preview.png";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between p-4 text-white 
          backdrop-blur-md bg-white/10 border-b border-white/10 
          shadow-lg">
        <div className="flex items-center">
          <Image 
            src={image} 
            alt="GuidEd Logo" 
            className="h-8 w-auto" 
            priority
          />
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/updates" className="
                hover:text-blue-300 transition-colors 
                duration-300 font-medium
                relative after:content-[''] after:absolute 
                after:bottom-0 after:left-0 after:w-0 
                after:h-px after:bg-blue-300 after:transition-all 
                after:duration-300 hover:after:w-full">
                Updates
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
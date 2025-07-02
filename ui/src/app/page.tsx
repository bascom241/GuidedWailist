"use client";
import React, { useState } from 'react';
import { BowArrow } from 'lucide-react';
import Form from '@/components/form/form';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center pt-24 min-h-screen bg-black text-white">

      <div className="relative  mb-8 flex items-center justify-center ">
        {/* Circle with top half white, bottom half black */}
        <div className="absolute w-14 h-14  rounded-full bg-gradient-to-b from-gray-600 to-black"></div>


        {/* Icon on top */}
        <BowArrow className="w-6 h-6 relative animate-bounce text-gray-500" />
      </div>

      {/* <h1 className="text-4xl font-bold mb-2">GuidEd WaitList</h1> */}
      {/* <p className="text-lg font-semibold">Welcome to the GuidEd Waitlist!</p> */}
      <Form
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  );
};

export default Home;


"use client"
import React from 'react';
import { useState } from 'react';
import ToastModal from '@/components/ToastModal';



const Update = ({}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('We will notify you when we launch the Updates page!');

    const handleClose = () => {
        setIsOpen(false);
    };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          We Are Coming Soon 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Stay tuned for updates on our launch! <br />
          We are building something amazing.
        </p>
        <div className="mt-6" onClick={() => setIsOpen(true)}>
          <button className="bg-blue-600 hover:bg-blue-300 hover:text-blue-700 duration-300 transition-all text-white font-semibold py-3 px-6 rounded-xl shadow-lg ">
            Notify Me When Launched
          </button>
        </div>
      </div>
      <ToastModal isOpen={isOpen} title='Updates Coming Soon!' content={message} onClose={handleClose} />
    </main>
  );
};

export default Update;

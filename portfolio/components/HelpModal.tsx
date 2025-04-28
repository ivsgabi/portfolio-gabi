'use client'

import { useState } from "react";

export default function HelpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleBox = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <>
      <h2 className="ml-5 text-sm cursor-pointer" onClick={toggleBox}>
        Help
      </h2>

      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 gg-black/40 backdrop-blur-sm"
          onClick={toggleBox}
        >
          <div
            className={`justify-center w-[30%] h-[28%] bg-page-grey rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="h-12 bg-gradient-to-r transparent-grey flex items-center px-4 text-lg font-semibold text-white">
              <div className="flex space-x-2">
                <div
                  className="w-4 h-4 rounded-full bg-red-500 cursor-pointer"
                  onClick={toggleBox}
                />
              </div>
              <div className="text-center w-full">Help</div>
            </div>
            <div className="mt-5 mb-5 mx-10">
            <p className="text-center text-white text-xl font-bold mb-3">Welcome to Johana Gaba's Portfolio Website.</p>
            <p className="text-center text-white text-base">This project offers you an immersion into my desktop environment, giving you a few hints about my personality and skills.</p>
            <p className="text-center text-white text-base">Feel free to explore the folders!</p>
            <p className="text-center text-white text-base">You can also send me feedback or get in touch using the mail application available here.</p>
            <p className="text-center text-white text-base mb-2">I hope you'll enjoy your visit!</p>
            <p className="text-center text-gray-500 text-sm font-light">Realease Version 1.0.0</p> 
            </div>    
          </div>
        </div>
      )}
    </>
  );
}


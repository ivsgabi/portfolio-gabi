'use client';

import { useState } from "react";

export default function DisclaimerPopUp() {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

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
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black/40 backdrop-blur-sm"
          onClick={toggleBox}
        >
          <div
            className={`relative w-[500px] bg-page-grey rounded-lg shadow-2xl transition-all duration-300 ease-out transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-12 flex items-center justify-between px-4 py-2 transparent-grey rounded-t-lg">
              <div className="flex space-x-2"> 
              </div>
              <div className="text-white text-sm font-semibold text-center w-full -ml-6">
                DISCLAIMER
              </div>
            </div>

            <div className="p-6 text-white">
              <p className="text-xl font-bold text-center mb-4">Welcome to Johana Gaba's Portfolio Website.</p>
              <p className="text-base text-center">The site is currently optimized for computer screens only.</p>
              <p className="text-base text-center mb-2">The responsive version is under development and will be available in the next update.</p>
              <p className="text-base text-center mb-4">I hope you'll enjoy your visit!</p>
              <p className="text-sm text-center text-gray-400 font-light">Release Version 1.0.0</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

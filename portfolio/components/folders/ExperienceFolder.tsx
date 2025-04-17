'use client';
import { useEffect, useState } from "react";

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function ExperienceFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); 
  }, []);

  return (
    <div className="flex items-center justify-center bg-transparent w-[60vw]">
      <div
        className={`relative w-[100%] h-[60vh] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-100 flex items-center px-4 text-lg font-semibold text-gray-800">
          <div className="flex space-x-2">
            <div
              className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
              onClick={closeWindow}
            ></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
          <div className="text-center w-full">XP</div>
        </div>

        <div className="p-4 space-y-4 overflow-auto h-full">
            <div className="flex space-x-15 mx-5">
              <div className="flex-cols h-30 w-30">
                <div className="pale-pink-folder-icon-pic mt-[-5]"/>
                <span className="items-center justify-center ml-12 mt-[-10] flex text-center text-black text-sm">Epitech</span>
              </div>
              <div className="flex-cols h-30 w-30">
                <div className="pale-pink-folder-icon-pic mt-[-5]"/>
                <span className="items-center justify-center ml-12 mt-[-10] flex text-center text-black text-sm">nricher</span>
              </div>
              <div className="flex-cols h-30 w-30">
                <div className="pale-pink-folder-icon-pic mt-[-5]"/>
                <span className="items-center justify-center ml-11 mt-[-10] flex text-center text-black text-sm">Apple Retail</span>
              </div>
              <div className="flex-cols h-30 w-30">
                <div className="pale-pink-folder-icon-pic mt-[-5]"/>
                <span className="items-center justify-center ml-11 mt-[-10] flex text-center text-black text-sm">projects</span>
              </div>

            </div>
          </div>
      </div>
    </div>
  );
}

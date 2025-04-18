'use client';
import { Link } from "lucide-react";
import { useEffect, useState } from "react";

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function JohanaFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const enlargeWindow = () => {
    setIsEnlarge(!isEnlarge);
  };

  return (
    <>
      {isEnlarge && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[9998]" />
      )}

      <div
        className={`${
          isEnlarge
            ? 'fixed top-0 left-0 w-screen h-screen z-[10000]'
            : 'w-[60vw]'
        } flex items-center justify-center bg-transparent transition-all duration-300`}
      >
        <div
          className={`relative ${
            isEnlarge ? 'w-full h-full' : 'w-full h-[60vh]'
          } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-100 flex items-center px-4 text-lg font-semibold text-gray-800">
            <div className="flex space-x-2">
              <div
                className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
                onClick={closeWindow}
              ></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div
                className="w-4 h-4 rounded-full bg-green-500 cursor-pointer"
                onClick={enlargeWindow}
              />
            </div>
            <div className="text-center w-full">Johana</div>
          </div>

          <div className="p-4 space-y-4 overflow-auto h-full">
            <div className="flex space-x-3 mx-5">
            <a href="./folder-content/CV/CV-portfolio-FR-GABA.pdf" target="_blank" rel="noopener noreferrer">
              <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                <div className="pink-file-icon-pic mt-[-20]" />
                <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                  CV-FR
                </span>
              </div>
            </a>
            <a href="./folder-content/CV/CV-portfolio-EN-GABA.pdf" target="_blank" rel="noopener noreferrer">
              <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                <div className="pink-file-icon-pic mt-[-20]" />
                <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                  CV-EN
                </span>
              </div>
            </a>
            {/* <a href="./CV/CV-portfolio-FR-GABA.pdf" target="_blank" rel="noopener noreferrer">
              <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                <div className="pink-file-icon-pic mt-[-20]" />
                <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                  about me
                </span>
              </div>
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

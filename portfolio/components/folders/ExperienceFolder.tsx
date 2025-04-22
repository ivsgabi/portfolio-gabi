'use client';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function ExperienceFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);
  const [isEpitechOpen, setIsEpitechOpen] = useState(false);
  const [isNricherOpen, setIsNricherOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

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
          } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
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
          {!isEpitechOpen && !isNricherOpen  && !isProjectsOpen ? (
            <div className="flex space-x-15 mx-5">
              <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setIsEpitechOpen(true)}>
                <div className="pale-pink-folder-icon-pic mt-[-5]" />
                <span className="items-center justify-center ml-12 mt-[-10] flex text-center text-black text-sm">Epitech</span>
              </div>

              <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setIsNricherOpen(true)}>
                <div className="pale-pink-folder-icon-pic mt-[-5]" />
                <span className="items-center justify-center ml-12 mt-[-10] flex text-center text-black text-sm">nricher</span>
              </div>

              <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setIsProjectsOpen(true)}>
                <div className="pale-pink-folder-icon-pic mt-[-5]" />
                <span className="items-center justify-center ml-11 mt-[-10] flex text-center text-black text-sm">favorites projects</span>
              </div>
            </div>
          ) : null}

          {isEpitechOpen && (
            <div className="p-4 space-y-4">
              <IoIosArrowBack onClick={() => setIsEpitechOpen(false)} className="absolute mt-[-20] left-5 text-gray-400 h-5 w-5"/>
              <div className="p-4 space-y-4 h-full">
                <div className="flex space-x-3  mt-[-30]">
                  <a href="./folder-content/XP/astek-role.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                      <div className="pink-file-icon-pic mt-[-20]" />
                      <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                        astek-tasks.pdf
                      </span>
                    </div>
                  </a>
                  <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                      <div className="pink-file-icon-pic mt-[-20]" />
                      <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                        astek-stack.pdf
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}

          {isNricherOpen && (
            <div className="p-4 space-y-4">
            <IoIosArrowBack onClick={() => setIsNricherOpen(false)} className="absolute mt-[-20] left-5 text-gray-400 h-5 w-5"/>
            <div className="p-4 space-y-4 h-full">
              <div className="flex space-x-3  mt-[-30]">
                <a href="./folder-content/XP/nricher-role.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      nricher-tasks.pdf
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/nricher-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      nricher-stack.pdf
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          )}

          {isProjectsOpen && (
            <div className="p-4 space-y-4">
            <IoIosArrowBack onClick={() => setIsProjectsOpen(false)} className="absolute mt-[-20] left-5 text-gray-400 h-5 w-5"/>
            <div className="p-4 justify-center flex w-full">
              <div className="grid grid-cols-6 gap-y-30 gap-x-15 mt-[-30]">
                <a href="./folder-content/XP/astek-role.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      BSQ - C
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      minishell - C
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      Image Compressor - Haskell
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      myFTP - C
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      my_printf - C
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      my_paint - C, CSFML
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      raytracer - C++
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      AREA - NestJS, NextJS
                    </span>
                  </div>
                </a>
                <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                      RType - C++
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

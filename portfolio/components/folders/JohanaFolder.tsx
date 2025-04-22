'use client';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import ImageViewer from '../ImageViewer';

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function JohanaFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isAspirationsOpen, setIsAspirationsOpen] = useState(false);

  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    './folder-content/pictures/A92741C4-DAB4-4314-A1BD-1261A4A3C5FA.JPEG',
    './folder-content/pictures/IMG_0238.JPEG',
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); 
  }, []);

  const enlargeWindow = () => {
    setIsEnlarge(!isEnlarge);
  };

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageViewerOpen(true);
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
            {!isFavOpen && !isAspirationsOpen ? (
              <div className="flex space-x-15 mx-5">
                <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setIsFavOpen(true)}>
                  <div className="pale-pink-folder-icon-pic mt-[-5]" />
                  <span className="items-center justify-center ml-12 mt-[-10] flex text-center text-black text-sm">pictures</span>
                </div>

                <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setIsAspirationsOpen(true)}>
                  <div className="pale-pink-folder-icon-pic mt-[-5]" />
                  <span className="items-center justify-center ml-12 mt-[-10] flex text-center text-black text-sm">aspirations</span>
                </div>
              </div>
            ) : null}

            {isFavOpen && (
              <div className="p-4 space-y-4">
                <IoIosArrowBack onClick={() => setIsFavOpen(false)} className="absolute mt-[-20] left-5 text-gray-400 h-5 w-5"/>
                <div className="p-4 space-y-4 h-full">
                  <div className="flex space-x-3 mt-[-30]">
                    {images.map((src, index) => (
                      <div
                        key={index}
                        className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200"
                        onClick={() => openImageViewer(index)}
                      >
                        <div className="pink-file-icon-pic mt-[-20]" />
                        <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                          {src.split('/').pop()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {isAspirationsOpen && (
              <div className="p-4 space-y-4">
                <IoIosArrowBack onClick={() => setIsAspirationsOpen(false)} className="absolute mt-[-20] left-5 text-gray-400 h-5 w-5"/>
                <div className="p-4 space-y-4 h-full">
                  <div className="flex space-x-3 mt-[-30]">
                    <a href="./folder-content/XP/astek-role.pdf" target="_blank" rel="noopener noreferrer">
                      <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                        <div className="pink-file-icon-pic mt-[-20]" />
                        <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                          goals
                        </span>
                      </div>
                    </a>
                    <a href="./folder-content/XP/astek-stack.pdf" target="_blank" rel="noopener noreferrer">
                      <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                        <div className="pink-file-icon-pic mt-[-20]" />
                        <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                          wants & needs
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

      {isImageViewerOpen && (
        <ImageViewer
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setIsImageViewerOpen(false)}
          onPrev={() =>
            setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)
          }
          onNext={() =>
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}

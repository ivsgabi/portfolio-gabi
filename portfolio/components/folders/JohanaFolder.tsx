'use client';
import { useState, useEffect } from 'react';
import ImageViewer from '../ImageViewer';

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function JohanaFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    './folder-content/pictures/IMG_0238.JPEG',
    './folder-content/pictures/IMG_0310.JPEG',
    './folder-content/pictures/IMG_0476.JPEG',
    './folder-content/pictures/IMG_0598.JPEG',
    './folder-content/pictures/IMG_0971.JPEG',
    './folder-content/pictures/IMG_1227.JPEG',
    './folder-content/pictures/IMG_1573.JPEG',
    './folder-content/pictures/IMG_1586.JPEG',
    './folder-content/pictures/IMG_8250.JPEG',
    './folder-content/pictures/IMG_2364.JPEG',
    './folder-content/pictures/IMG_0445.JPEG',
    './folder-content/pictures/IMG_2563.JPEG',
    './folder-content/pictures/IMG_2392.JPEG',
    './folder-content/pictures/IMG_4679.JPEG',
    './folder-content/pictures/IMG_5131.JPEG',
    './folder-content/pictures/IMG_5381.JPEG',
    './folder-content/pictures/IMG_6116.JPEG',
    './folder-content/pictures/IMG_7117.JPEG',
    './folder-content/pictures/IMG_9122.JPEG',
    './folder-content/pictures/IMG_1681.JPEG',
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
            isEnlarge ? 'w-full h-full' : 'w-full h-[62vh]'
          } bg-page-grey rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <div className="h-12 bg-gradient-to-r transparent-grey flex items-center px-4 text-lg font-semibold text-white">
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

          <div className="p-4 space-y-4 h-full justify-center overflow-x-clip mx-10 mt-5 ">
            <div className={`${isEnlarge ? "grid grid-cols-10 gap-y-30 gap-x-15 mt-[-30]" : "grid grid-cols-6 gap-y-30 gap-x-15 mt-[-30]"}`}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200"
                  onClick={() => openImageViewer(index)}
                >
                  <div className="pink-file-icon-pic mt-[-20]" />
                  <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-white text-sm">
                    {src.split('/').pop()}
                  </span>
                </div>
              ))}
            </div>
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

'use client';

import { useEffect, useState } from 'react';

export default function ScreenResolutionWarning() {
  const [showWarning, setShowWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkResolution = () => {
      const isSmallScreen = window.innerWidth < 1320 || window.innerHeight < 720;
      setShowWarning(isSmallScreen);
    };

    checkResolution();

    window.addEventListener('resize', checkResolution);
    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  if (!showWarning) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black/40 backdrop-blur-2xl"
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

            <div className="p-6 text-white text-center">
            <p>Unfortunately, the completely responsive version of the website is still in development.</p>
            <p>This site is best viewed on a screen resolution of at least 1700 x 895 for now. </p>
            <p className="text-white text-sm text-center">Please resize your screen if possible.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

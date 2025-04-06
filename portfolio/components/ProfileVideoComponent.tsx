'use client';
import { useState, useEffect } from "react";

export default function ProfileVideo() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [currentGif, setCurrentGif] = useState("/memoji-welcome-video.gif");

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  const handleMouseEnter = () => {
    setCurrentGif("/memoji/memoji-hover-video.gif");
    setIsVideoFinished(false);
  };

  const handleMouseLeave = () => {
    setCurrentGif("/memoji/memoji-welcome-video.gif"); 
    setIsVideoFinished(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVideoFinished(true);
    }, 3800); 

    return () => clearTimeout(timeout);
  }, [currentGif]);

  return (
    <main className="flex items-center justify-center h-screen mt-10">
      <div
        className="w-65 h-65 rounded-full overflow-hidden bg-white flex items-center justify-center relative"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <img
          src={currentGif}
          alt="Memoji Video GIF"
          className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${isVideoFinished ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="/memoji/memoji-welcome-pic.png"
          alt="Memoji Image"
          className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${isVideoFinished ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </main>
  );
}

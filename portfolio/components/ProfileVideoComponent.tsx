'use client';

import { useState, useEffect } from "react";

export default function ProfileVideo() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVideoFinished(true);
    }, 4500); //

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex items-center justify-center h-screen mt-10 ">
      <div className=" w-65 h-65 rounded-full overflow-hidden bg-white flex items-center justify-center">
        {!isVideoFinished ? (
          <img
            src="/memoji-welcome-video.gif"
            alt="Memoji Video GIF" 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src="/memoji-welcome-pic.png" 
            alt="Memoji Image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </main>
  );
}

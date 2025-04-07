'use client';
import { useState } from "react";
import FolderWindow from "./FolderWindowComponent";

interface AppGroupConfig {
  buttonLook: string;
  content: string;
}

export default function FolderButton({ buttonLook, content }: AppGroupConfig) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div 
        onClick={toggleBox}
        className={`relative cursor-pointer transition-all duration-300 ease-out`}
      >
        <div className={buttonLook} />
      </div>

      {isOpen && (
        <div 
          className="folder-window-container fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
        >
          <FolderWindow />
        </div>
      )}
      <div className="opacity-100 text-center mt-[-15px] ml-[-10px] text-white transition-all duration-300 ease-out" >
        {content}
      </div>
    </div>
  );
}

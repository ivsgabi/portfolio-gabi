'use client';
import { useState } from "react";

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
    <div>
      <div 
        onClick={toggleBox}
        className={`relative cursor-pointer ${isOpen ? "bg-pink-400 h-50 w-50" : "bg-transparent "} transition-all duration-300 ease-out`} 
      >
        <div className={buttonLook}/>
      </div>

      <div
        className={`${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        style={{
          transform: isOpen ? "translate(-50%, -50%)" : "translate(-50%, -50%)",
          zIndex: isOpen ? 10 : -10,
        }}
      />
      
      <div className={`${isOpen ? "text-center mt-2 text-white" : "text-transparent"}`}>{content}</div>
    </div>
  );
}

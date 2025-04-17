'use client';
import { useState } from "react";
import JohanaFolder from "./folders/JohanaFolder";
import ExperienceFolder from "./folders/ExperienceFolder";
import MoreFolder from "./folders/MoreFolder";

interface AppGroupConfig {
  folderLook: string;
  name: string;
}

export default function FolderButton({ folderLook, name }: AppGroupConfig) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div 
        onClick={toggleBox}
        className="relative cursor-pointer transition-all duration-300 ease-out"
      >
        <div className={folderLook} />
      </div>

      {isOpen && (
        <div className="folder-window-container fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
         {name == "Johana" ? <JohanaFolder closeWindow={toggleBox} /> : ""}
         {name == "XP" ? <ExperienceFolder closeWindow={toggleBox} /> : ""}
         {name == "+" ? <MoreFolder closeWindow={toggleBox} /> : ""}
        </div>
      )}

      <div className="opacity-100 text-center mt-[-15px] ml-[-10px] text-white transition-all duration-300 ease-out text-xl">
        {name}
        {isOpen && <span className="ml-2 text-gray-600">●</span>}
      </div>
    </div>
  );
}

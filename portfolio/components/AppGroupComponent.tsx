'use client'
import { useState } from "react";
import { Button } from "./ui/button";

interface AppGroupConfig {
  buttonLook: string,
  groupTitle: string,
  content: Map<string, Array<string>>,
}

// array -> [0] .svg, [1] infos

export default function AppGroupComponent({ buttonLook, groupTitle, content }: AppGroupConfig) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] transparent-white"
        onClick={toggleBox}
      >
        <div className={buttonLook} />
      </Button>

      <div
        className={`${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-all duration-500 ease-out w-[47%] h-[65vh] transparent-white rounded-[60px] absolute flex justify-center items-center`}
        style={{
          top: isOpen ? "-360%" : "0",
          left: "50%", 
          transform: "translate(-50%, -50%)", 
        }}
      >
      <div>
        <h1 className="text-4xl font-bold mb-10 justify-center flex text-white">{groupTitle}</h1>
          <div className="grid grid-cols-3 gap-x-15 gap-y-5  justify-start">
          {Array.from(content).map(([key, value], index) => (
            <div>
              <Button
                key={index}
                className={`h-[120px] w-[120px] rounded-3xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] ${value[1]}`}
              >
                <div className={value[0]}/>
              </Button>
              <p className="text-white text-center mt-2">{key}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}


{/* // devops part: git, github, github actions, docker, jenkins, kubernetes, AWS, Azure, Google Cloud */}
{/* // autre: pack office word, excel, powerbi, powerpoint, linux/macos, windows, certifications */}

'use client'
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

interface AppGroupConfig {
  id: string;
  buttonLook: string;
  groupTitle: string;
  content: Map<string, Array<string>>;
  isOpen: boolean;
  setActiveGroup: (id: string | null) => void;
}

export default function AppGroupComponent({
  id,
  buttonLook,
  groupTitle,
  content,
  isOpen,
  setActiveGroup,
}: AppGroupConfig) {
  const boxRef = useRef<HTMLDivElement>(null);

  const toggleBox = () => {
    setActiveGroup(isOpen ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setActiveGroup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setActiveGroup]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative group">
        <Button
          className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] transparent-grey"
          onClick={toggleBox}
        >
          <div className={buttonLook} />
        </Button>
        <div className="absolute bottom-[130%] left-1/2 transform -translate-x-1/2 w-40 transparent-grey text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 text-center pointer-events-none">
          <p className="font-semibold text-sm">{groupTitle}</p>
        </div>
      </div>

      <div
        ref={boxRef}
        className={`${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-all duration-500 ease-out w-[46%] h-[68vh] transparent-grey rounded-[60px] absolute flex justify-center items-center`}
        style={{
          top: isOpen ? "-360%" : "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold mx-10 mb-12 justify-center flex text-white">{groupTitle}</h1>
          <div className={`grid grid-cols-3 ${id == "webtools" ? 'gap-x-14' : ''}  ${id == "devops" ? 'mt-[-10]' : ''}  ${id == "others" ? 'mt-[-10] gap-x-10' : ''} gap-y-6 justify-center items-center mb-5`}>
            {Array.from(content).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center justify-center text-center">
                <Button
                  className={`h-[120px] w-[120px] rounded-3xl transition-transform duration-300 hover:translate-y-[-10px] ${value[1]}`}
                >
                  <div className={value[0]} />
                </Button>
                <p className="text-white mt-4 text-[20px] opacity-80">{key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

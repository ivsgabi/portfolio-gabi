'use client'
import { Button } from "./ui/button";
import Link from "next/link";
import AppGroupComponent from "./ApplicationGroup";
import { WebToolsMap, DevOpsMap, OthersMap } from "@/app/data/app-groups-infos";
import Divider from '@mui/material/Divider';
import MailButton from "./MailButton";
import { useState } from "react";


const skills = [
  { name: "C", iconClass: "C-icon-svg", bgColor: "bg-c-purple" },
  { name: "C++", iconClass: "CPP-icon-svg", bgColor: "bg-cpp-blue" },
  { name: "Python", iconClass: "python-icon-svg", bgColor: "bg-python-gray" },
  { name: "Go", iconClass: "go-icon-svg", bgColor: "bg-white" },
  { name: "React", iconClass: "react-icon-svg", bgColor: "bg-white" },
  { name: "TypeScript", iconClass: "TS-icon-svg", bgColor: "ts-blue" },
  { name: "HTML", iconClass: "HTML-icon-svg", bgColor: "bg-html-orange" },
  { name: "CSS", iconClass: "CSS-icon-svg", bgColor: "bg-css-blue" },
  { name: "Next.js", iconClass: "nextJS-icon-svg", bgColor: "bg-black" },
];

export default function ApplicationBarComponent() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return ( 
    <>
    {activeGroup && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm h-screen w-screen"
          onClick={() => setActiveGroup(null)}
        />
      )}
    
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2  h-30 transparent-grey flex items-center justify-center rounded-4xl shadow-lg text-black">
      
      <div className="ml-7 flex items-center">
        {skills.map(({ name, iconClass, bgColor }) => (
          <div key={name} className="relative group mx-1">
            <Button className={`h-[85px] w-[85px] rounded-2xl transition-transform duration-300 hover:translate-y-[-10px] ${bgColor}`}>
              <div className={iconClass} />
            </Button>
            <div className="absolute bottom-[130%] left-1/2 transform -translate-x-1/2 w-35 transparent-grey text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <p className="font-semibold text-sm">{name}</p>
            </div>
          </div>
        ))}
      </div>

      <AppGroupComponent id="webtools" buttonLook="webtools-group-icon-svg" groupTitle="Web Development Tools"
        content={WebToolsMap} isOpen={activeGroup === "webtools"} setActiveGroup={setActiveGroup}
      />
      <AppGroupComponent id="devops" buttonLook="devops-group-icon-svg" groupTitle="DevOps" content={DevOpsMap}
        isOpen={activeGroup === "devops"} setActiveGroup={setActiveGroup}
      />
      <AppGroupComponent id="others" buttonLook="others-group-icon-svg" groupTitle="Others" content={OthersMap}
        isOpen={activeGroup === "others"} setActiveGroup={setActiveGroup}
      />

      <Divider orientation="vertical" flexItem
        sx={{
          margin: '12px 12px',
          borderWidth: 3,
          height: '80%',
        }}
      />

      <div className="flex items-center mr-7">
        <div className="relative group">
          <Button asChild className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] github-profile-icon-svg bg-black">
            <Link href="https://github.com/ivsgabi" target="_blank" rel="noopener noreferrer" />
          </Button>
          <div className="absolute bottom-[125%] left-1/2 transform -translate-x-1/2 w-35 transparent-grey text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="font-semibold text-sm">GitHub Profile</p>
          </div>
        </div>
        
        <div className="relative group">
          <Button asChild className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] linkedIn-blue linkedin-icon-svg">
            <Link href="https://www.linkedin.com/in/johana-gaba-54865926b/" target="_blank" rel="noopener noreferrer" />
          </Button>
          <div className="absolute bottom-[125%] left-1/2 transform -translate-x-1/2 w-35 transparent-grey text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="font-semibold text-sm">LinkedIn Profile</p>
          </div>
        </div>
        <MailButton buttonLook="mail-icon-svg mr-1 mt-[-5] transition-transform duration-300 hover:translate-y-[-10px]"/>
      </div>
      
    </div>
    </>
  );
}

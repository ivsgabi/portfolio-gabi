import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import AppGroupComponent from "./AppGroupComponent";
import { WebToolsMap, DevOpsMap, OthersMap } from "@/app/data/app-groups-infos";

export default function ApplicationBarComponent() {
  return ( 
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-30 transparent-grey flex items-center justify-center rounded-4xl shadow-lg text-black">
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-c-purple ">
        <div className="C-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-cpp-blue">
        <div className="CPP-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-python-gray">
        <div className="python-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-white">
        <div className="go-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-white">
        <div className="react-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] ts-blue">
        <div className="TS-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] js-yellow">
        <div className="JS-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-html-orange">
        <div className="HTML-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-css-blue">
        <div className="CSS-icon-svg"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] bg-black">
        <div className="nextJS-icon-svg"/>
      </Button>

      <AppGroupComponent buttonLook={"webtools-group-icon-svg"} groupTitle={"Web Development Tools"} content={WebToolsMap}></AppGroupComponent>
      <AppGroupComponent buttonLook={"devops-group-icon-svg"} groupTitle={"DevOps"} content={DevOpsMap}></AppGroupComponent>
      <AppGroupComponent buttonLook={"others-group-icon-svg"} groupTitle={"Others"} content={OthersMap}></AppGroupComponent>

      <Separator orientation="vertical" className="more-transparent-grey ml-5 mr-5"/>
      {/* peut-être que j'utiliserai un autre divider */}
      <Button asChild className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] github-profile-icon-svg bg-black">
        <Link href="https://github.com/ivsgabi"/>
      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1 transition-transform duration-300 hover:translate-y-[-10px] linkedIn-blue">
        <div className="linkedin-icon-svg" />
      </Button>
      {/* image custom button */}
      <div className="mail-icon-svg mr-1 transition-transform duration-300 hover:translate-y-[-10px]"/>
      
      {/* need to make loop */}
    </div>
  );
}

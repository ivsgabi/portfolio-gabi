import { BsToggles, BsBatteryFull } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import RealTimeDate from "./DateComponent";

export default function TopBarComponent() {
    return (
      <div className="h-12 w-full transparent-grey flex text-white">
        <div className="ml-7 mb-1 mt-[15px] flex">
          <h1 className="mt-[-5px]  w-7 h-7 rounded-full bg-white"/>
          <h2 className="ml-5 text-sm">Help</h2>
        </div>
        <div className="ml-7 mr-7 mt-[15px] mb-4 flex w-full justify-end">
          <h1>  
            <BsBatteryFull size="20" className="mr-3 ml-3 mt-[-2]" />
          </h1>
          <h2>
            <IoSearch size="20" className="mr-3 ml-3" />
          </h2>
         <h3>
            <FaWifi size="20" className="mr-3 ml-3" />
          </h3>
          <h4>
            <BsToggles size="20" className="mr-3 ml-3" />
          </h4>
          <div>
            <RealTimeDate/>
          </div>
       
        </div>
      </div>
    );
  }
  
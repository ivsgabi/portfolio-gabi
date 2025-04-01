import { Content } from "next/font/google";
import { BsToggles, BsBatteryFull } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function TopBarComponent() {
    return (
      <div className="h-15 w-full transparent-white flex text-black">
        <div className="ml-7 mt-2 mb-1 JG-icon-gray-svg">

        </div>
        <div className="ml-7 mr-7 mt-4 mb-4 flex w-full justify-end">
          <h1>  
            <BsBatteryFull size="30" className="mr-3 ml-3 mt-[-2]" />
          </h1>
          <h1>
            <IoSearch size="25" className="mr-3 ml-3" />
          </h1>
         <h1>
            <FaWifi size="25" className="mr-3 ml-3" />
          </h1>
          <h2>
            <BsToggles size="25" className="mr-3 ml-3" />
          </h2>
          <h3 className="mr-5 ml-5">
            Lun. 1er Avril 2025 09:41
          </h3>
       
        </div>
      </div>
    );
  }
  
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator"


export default function ApplicationBarComponent() {
  return ( 
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] h-30 transparent-white flex items-center justify-center rounded-4xl shadow-lg text-black">
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Separator orientation="vertical" className="more-transparent-white ml-5 mr-5"/>
      {/* peut-être que j'utiliserai un autre divider */}
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button> 
      <Button className="h-[85px] w-[85px] rounded-2xl ml-1 mr-1">

      </Button>
      {/* need to make loop or back-end */}
    </div>
  );
}
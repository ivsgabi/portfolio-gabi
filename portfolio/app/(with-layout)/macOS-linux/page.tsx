import FolderButton from "@/components/FolderButton";
import WeatherWidget from "@/components/WeatherWidgetComponent";
import MusicWidget from "@/components/MusicWidgetComponent";

export default function MacOsPage() {
  return (
    <main className="w-full h-screen overflow-hidden absolute mt-[-48px] flex items-center justify-center text-3xl wallpaper-pic">
      <div className="mt-20 ml-10">
        <div className="absolute top-10 left-10 grid grid-cols-2 gap-y-10 gap-x-20 mt-20 ml-10 mr-10">
          <FolderButton folderLook="pink-folder-icon-pic" name="Johana" content="bullshit" />
          <FolderButton folderLook="pink-folder-icon-pic" name="XP" content="bullshit" />
          <FolderButton folderLook="pink-folder-icon-pic" name="+" content="bullshit" />
        </div>
      <div className="absolute top-5 right-5 mt-20 mr-10">
        <WeatherWidget/>
        <MusicWidget/>
      </div>
      </div>
    </main>
  );
}


// absolute mt-[-48px] flex items-center justify-center text-3xl wallpaper-pic
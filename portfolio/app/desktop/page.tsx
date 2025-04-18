import FolderButton from "@/components/FolderButton";
import WeatherWidget from "@/components/WeatherWidget";
import MusicWidget from "@/components/MusicWidget";
import TopBarComponent from "@/components/TopBar";
import ApplicationBarComponent from "@/components/ApplicationsBar";

export default function Desktop() {
  return (
    <div>
    <main className="w-full h-screen overflow-hidden absolute justify-center text-3xl wallpaper-pic">
      <header>
        <TopBarComponent/>
      </header>
      <div className="mt-20 ml-10">
        <div className="absolute top-10 left-10 grid grid-cols-2 gap-y-10 gap-x-20 mt-20 ml-10 mr-10">
          <FolderButton folderLook="pink-folder-icon-pic" name="Johana" />
          <FolderButton folderLook="pink-folder-icon-pic" name="XP" />
          <FolderButton folderLook="pink-folder-icon-pic" name="+" />
        </div>
      <div className="absolute top-5 right-5 mt-20 mr-10">
        <WeatherWidget/>
        <MusicWidget/>
      </div>
      </div>
      <footer>
        <ApplicationBarComponent/>
      </footer>
    </main>
    </div>
  );
}



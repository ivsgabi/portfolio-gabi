import FolderButton from "@/components/FolderComponent";

export default function MacOsPage() {
  return (
    <main>
      <div className="absolute mt-[-48px] flex items-center justify-center text-3xl wallpaper-pic" />
      <header className="h-15"/>
      <div className="mx-15 mb-10 ">
        <div className="grid grid-cols-10 gap-x-10 gap-y-5 justify-start">
          <FolderButton buttonLook={"pink-folder-icon-pic"} content={"blabla"} />
        </div>
      </div>
    </main>
  );
}

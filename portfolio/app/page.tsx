// First Page - OS CHOICE

import { ProfileButton } from "@/components/ProfileButton";
import DisclaimerPopUp from "@/components/DisclaimerPopUp"

export default function ProfilePage() {
  return (
    <main className="relative flex items-center justify-center h-screen w-screen">
      <div className="welcome-wallpaper-pic absolute top-0 left-0 w-full h-full z-[-1]" />
      <ProfileButton />
      <DisclaimerPopUp/>
      <></>
    </main>
  );
}

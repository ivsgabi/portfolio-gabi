'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/macOS-linux'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex items-center justify-center h-screen w-screen">
      <div className="welcome-wallpaper-pic absolute top-0 left-0 w-full h-full z-[-1]" />
      <img
          src="/loading-2.gif"
          alt="Loading icon rolling"
          className={`w-15 h-15 object-cover absolute transition-opacity duration-1000 ease-in-out`}
        />
    </main>
  );
}



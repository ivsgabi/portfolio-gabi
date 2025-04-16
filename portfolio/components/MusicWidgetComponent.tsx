'use client'

import { useEffect } from 'react';

export default function MusicWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-5 h-[40vh] w-[30vw] flex flex-col justify-center items-center rounded-4xl text-white bg-pink-300 p-4">
        <div className='absolute justify-center items-center flex top-20'>
            <div className="elfsight-app-30f87820-5f2a-4fc5-b50a-b523aa1a6622" data-elfsight-app-lazy></div>
        </div>
    </div>
  );
}

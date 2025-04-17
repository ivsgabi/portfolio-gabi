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
    <div className="mt-5 h-[40vh] w-[30vw] flex flex-col justify-center items-center rounded-4xl text-white bg-gray-700 p-4">
        <div className='absolute justify-center items-center flex'>
          music widget
        </div>
    </div>
  );
}

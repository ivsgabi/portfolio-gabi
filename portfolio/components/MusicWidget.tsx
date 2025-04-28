'use client';
import { useState, useRef } from 'react';

import { IoPlay, IoPause, IoPlayForward, IoPlayBack } from "react-icons/io5";


type Song = {
  title: string;
  artist: string;
  src: string;
  cover: string;
};

const songs: Song[] = [
  {
    title: "with the IE (way up) 🅴",
    artist: "JENNIE",
    src: "/music/with-the-IE-(way up).mp3",
    cover: "/album-covers/ruby-cover.jpg",
  },
  {
    title: "Chicago",
    artist: "Michael Jackson",
    src: "/music/chicago.mp3",
    cover: "/album-covers/chicago-cover.jpg",
  },
  {
    title: "Lost 🅴",
    artist: "Frank Ocean",
    src: "/music/lost.mp4",
    cover: "/album-covers/channel-orange-cover.jpg",
    
  },
  {
    title: "Too Many Nights<br/>(feat. Don Toliver) 🅴",
    artist: "Metro Boomin & Future",
    src: "/music/TMN.mp3",
    cover: "/album-covers/heroes-villains-cover.jpg",
     
  },
  {
    title: "This Could Be Us 🅴",
    artist: "Rae Sremmurd",
    src: "/music/TCBU.mp3",
    cover: "/album-covers/TCBU-cover.png",
     
  },
  {
    title: "Ni**as in Paris 🅴",
    artist: "JAY-Z & Kanye West",
    src: "/music/nword-in-paris.mp3",
    cover: "/album-covers/nword-in-paris-cover.jpg",
  },
  {
    title: "Come We Bill Ehh 🅴",
    artist: "Midas The Jagaban",
    src: "/music/come-we-bill-ehh.mp3",
    cover: "/album-covers/CWBE.jpeg",
  },

  {
    title: "Lalla",
    artist: "Kore & Hamza",
    src: "/music/lalla.mp3",
    cover: "/album-covers/lalla-cover.jpg",
  },
  {
    title: "Baby By Me (feat. Ne-Yo) 🅴",
    artist: "50 Cent",
    src: "/music/baby-by-me.mp3",
    cover: "/album-covers/baby-by-me-cover.jpg",
  },
  {
    title: "pick up the phone",
    artist: "Young Thug & Travis Scott 🅴",
    src: "/music/PUTP.mp3",
    cover: "/album-covers/travis-cover.jpg",
  },
  {
    title: "Danza",
    artist: "KB, Niko Eme & Cardec Drums",
    src: "/music/danza.mp3",
    cover: "/album-covers/danza-cover.jpg",
  },

];

export default function MusicWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentIndex];

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    isPlaying ? pauseSong() : playSong();
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => playSong(), 100);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => playSong(), 100);
  };

  return (
    <div className={`mt-5 h-[40vh] w-[30vw] flex flex-col justify-center items-center rounded-4xl transparent-black p-4 shadow-lg text-neutral-100`}>
      <div className="flex gap-5 items-center">
        <img
          src={currentSong.cover}
          alt={`Cover for ${currentSong.title}`}
          className="w-66 h-66 object-cover rounded-lg text-sm"
        />

        <div className="flex flex-col justify-between flex-1">
          <div>
          <h2 className="text-lg font-semibold break-words" dangerouslySetInnerHTML={{ __html: currentSong.title }} />
            <p className="text-sm text-neutral-400 truncate">{currentSong.artist}</p>
          </div>

          <div className="flex gap-4 mt-4 items-center">
            <button
              onClick={goToPrevious}
              className="hover:bg-neutral-600 transition p-3 rounded-lg text-white z-[3]"
              aria-label="Previous"
            >
              <IoPlayBack size={24} />
            </button>

            <button
              onClick={togglePlay}
              className=" hover:bg-neutral-600 transition p-4 rounded-lg text-white z-[3]"
              aria-label="Play/Pause"
            >
              {isPlaying ? <IoPause size={36} /> : <IoPlay size={36} />}
            </button>

            <button
              onClick={goToNext}
              className="hover:bg-neutral-600 transition p-3 rounded-lg text-white z-[3]"
              aria-label="Next"
            >
              <IoPlayForward size={24} />
            </button>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={currentSong.src} />
    </div>
  );
}

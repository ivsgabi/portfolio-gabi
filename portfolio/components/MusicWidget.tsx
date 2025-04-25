'use client';
import { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

type Song = {
  title: string;
  artist: string;
  src: string;
  cover: string;
};

const songs: Song[] = [
  {
    title: "Baby By Me (feat. Ne-Yo)",
    artist: "50 Cent",
    src: "/music/baby-by-me.mp4",
    cover: "/album-covers/baby-by-me-cover.jpg",
  },
  {
    title: "with the IE (way up)",
    artist: "JENNIE",
    src: "/music/with-the-IE-(way up).mp3",
    cover: "/album-covers/ruby-cover.jpg",
  },
  {
    title: "Get Back",
    artist: "Britney Spears",
    src: "/music/get-back.mp4",
    cover: "/album-covers/blackout-cover.jpg",
  },
  {
    title: "Lost",
    artist: "Frank Ocean",
    src: "/music/lost.mp4",
    cover: "/album-covers/channel-orange-cover.jpg",
  },
  {
    title: "Chicago",
    artist: "Michael Jackson",
    src: "/music/chicago.mp4",
    cover: "/album-covers/chicago-cover.jpg",
  },
  {
    title: "This Could Be Us",
    artist: "Rae Sremmurd",
    src: "/music/this-could-be-us.mp4",
    cover: "/album-covers/TCBU-cover.png",
  },
  {
    title: "Too Many Nights",
    artist: "Metro Boomin & Future",
    src: "/music/too-many-nights.mp3",
    cover: "/album-covers/heroes-villains-cover.jpg",
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
    <div className="mt-5 h-[40vh] w-[30vw] flex flex-col justify-center items-center rounded-4xl bg-page-grey-transparent p-4 shadow-lg text-neutral-100">
      <div className="flex gap-5 items-center">
        <img
          src={currentSong.cover}
          alt={`Cover for ${currentSong.title}`}
          className="w-70 h-70 object-cover rounded-xl"
        />

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-lg font-semibold truncate">{currentSong.title}</h2>
            <p className="text-sm text-neutral-400 truncate">{currentSong.artist}</p>
          </div>

          <div className="flex gap-4 mt-4 items-center">
            <button
              onClick={goToPrevious}
              className="hover:text-neutral-400 transition"
              aria-label="Previous"
            >
              <SkipBack size={20} />
            </button>

            <button
              onClick={togglePlay}
              className="hover:text-neutral-400 transition"
              aria-label="Play/Pause"
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>

            <button
              onClick={goToNext}
              className="hover:text-neutral-400 transition"
              aria-label="Next"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={currentSong.src} />
    </div>
  );
}

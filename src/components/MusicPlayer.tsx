"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
        audioRef.current?.pause();
    }
  }, []);

  return (
    <>
        <button onClick={togglePlay}
            className="bg-[#FFC1CC] rounded-full border-0 w-16 text-2xl cursor-pointer flex items-center justify-center h-16 shadow-md hover:bg-pink-500 transition-colors"
        >
            {isPlaying ? "⏸️" : "▶️"}
        </button>

        <audio ref={audioRef} src="/music.mp3" loop preload="auto"></audio>
    </>
  );
}

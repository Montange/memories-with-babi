"use client";

import { Memory } from "@/types/memory";
import Timeline from "@/components/Timeline";
import { useRef, useState } from "react";

export default function HomeClient({ memories }: { memories: Memory[] }) {
  const [playingID, setPlayingID] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (memory: Memory) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    if (playingID === memory.$id) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingID(null);
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.src = `/audio/${memory.musicFileID}`;
    audio.play();

    setPlayingID(memory.$id);
  };

  const memoriesByYear = memories.reduce<Record<number, Memory[]>>(
    (acc, memory) => {
      const year = new Date(memory.date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(memory);
      return acc;
    },
    {}
  );

  const years = Object.keys(memoriesByYear).sort();

  return (
    <div className="bg-[#FFF1E6]">
      <h1 className="text-center text-2xl font-semibold p-4">
        Memories In Time
      </h1>

      {years.map((year) => (
        <div key={year}>
          <h3 className="text-center text-xl font-semibold">{year}</h3>
          <Timeline
            memories={memoriesByYear[Number(year)]}
            playingID={playingID}
            onPlay={handlePlay}
          />
        </div>
      ))}

      <h3 className="text-center text-xl font-semibold">2026</h3>
      <p className="text-center text-lg">Hello, Bubby!</p>

      <div className="w-vw flex justify-center items-center mx-2 p-10 bg-white rounded-md">
          <h3 className="text-center text-xl font-semibold mt-1">
            COMING SOON!!
          </h3>
      </div>
    </div>
  );
}

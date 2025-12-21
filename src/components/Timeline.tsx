"use client";
import React, { useRef, useState } from "react";
import { Memory } from "@/types/memory";
import MemoryCard from "./MemoryCard";


type Props = {
  memories: Memory[];
  playingID: string | null;
  onPlay: (memory: Memory) => void;
};

export default function Timeline({ memories, playingID, onPlay }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {memories.map((memory) => (
          <MemoryCard
            key={memory.$id}
            memory={memory}
            isPlaying={playingID === memory.$id}
            disabled={playingID !== null && playingID !== memory.$id}
            onPlayClick={() => onPlay(memory)}
          />
        ))}
      </div>
    </div>
  );
}

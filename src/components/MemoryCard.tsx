"use client";
import { Memory } from "@/types/memory";
import { AnimatePresence, motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";
import { storage } from "@/lib/appwrite";

type Props = {
  memory: Memory;
};

export default function MemoryCard({ memory }: Props) {
  const [expandedImageId, setExpandedImageId] = useState<string | null>(null);

  const formattedDate = new Date(memory.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;

  // Convert Appwrite file ID to a public URL
  const getImageUrl = (fileId: string) => storage.getFileView(bucketId, fileId);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-md overflow-hidden w-full"
      >
        <ImageCarousel
  images={memory.imageIds.map(getImageUrl)}
  onImageClick={(fileId: string) => setExpandedImageId(fileId)}
/>


        <div className="p-6">
          <p className="text-sm text-[#6D4C41]">{formattedDate}</p>
          <h3 className="text-xl font-semibold mt-1 text-[#6D4C41]">
            {memory.title}
          </h3>
          <p className="text-[#6D4C41] mt-2 leading-relaxed">
            {memory.description}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {expandedImageId && (
          <motion.div
            key={"overlay"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImageId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF1E6]"
          >
            <motion.img
              key="image"
              src={getImageUrl(expandedImageId)}
              alt="Expanded Image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

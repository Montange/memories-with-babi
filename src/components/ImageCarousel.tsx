"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getImageUrl } from "@/lib/imageHandle";

type Props = {
  images: string[]; // Appwrite file IDs
  onImageClick?: (fileId: string) => void;
};

export default function ImageCarousel({ images, onImageClick }: Props) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((fileId) => {
        const url = getImageUrl(fileId); // generate URL for display
        return (
          <SwiperSlide key={fileId}>
            <img
              src={url}
              alt="Memory Image"
              className="w-full h-56 object-contain rounded-lg bg-[#FFC1CC]"
              onClick={() => onImageClick?.(fileId)} // pass file ID
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getImageUrl } from "@/lib/imageHandle";

type Props = {
  images: string[];
  onImageClick?: (url: string) => void; // optional click handler
};

export default function ImageCarousel({ images, onImageClick }: Props) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((fileId, i) => {
        const url = getImageUrl(fileId);
        return (
          <SwiperSlide key={i}>
            <img
              src={url}
              alt={`Image ${i + 1}`}
              className="w-full h-56 object-contain rounded-lg bg-[#FFC1CC]"
              onClick={() => onImageClick?.(url)} // call click handler if provided
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

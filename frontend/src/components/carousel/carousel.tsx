"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface WeaponSlide {
  image: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  images?: string[];
  slides?: WeaponSlide[];
}

export default function Carousel({ images, slides }: CarouselProps) {
  const data: WeaponSlide[] = slides ?? images?.map((image) => ({ image })) ?? [];

  return (
    <div className="flex w-full justify-center px-4">
      <div className="w-full max-w-5xl rounded-xl bg-black/50 px-6 py-10 md:px-16 md:pb-16 md:pt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="weapon-swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.image}>
              <div className="text-center">
                <div className="relative mb-6 h-64 w-full md:h-96">
                  <Image
                    src={item.image}
                    alt={item.title ?? "Weapon"}
                    fill
                    sizes="(min-width: 768px) 900px, 100vw"
                    className="object-contain"
                  />
                </div>

                {item.title && (
                  <h3 className="text-xl font-semibold text-gray-200 md:text-2xl">
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 md:max-w-3xl md:text-lg">
                    {item.description}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BannerSection() {
  const corouselItems = [
    {
      id: 1,
      image: "banner-1",
    },
    {
      id: 2,
      image: "banner-2",
    },
    {
      id: 3,
      image: "banner-3",
    },
    {
      id: 4,
      image: "banner-4",
    },
    {
      id: 5,
      image: "banner-5",
    },
    {
      id: 6,
      image: "banner-6",
    },
  ];
  const plugin = useRef([
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <section className="banner-section">
      <div className="banner-container">
        <Carousel
          className="flex justify-center items-center w-full"
          opts={{
            loop: true,
          }}
          plugins={plugin.current}
        >
          <CarouselContent className="flex">
            {corouselItems.map((item) => {
              return (
                <CarouselItem key={item.id} className="banner-corousel">
                  <Image
                    src={`/banners/${item.image}.jpg`}
                    alt="banner"
                    width={1280}
                    height={720}
                    className="banner-item"
                  ></Image>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import banner from "../assets/banners/test-banner.jpg";
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
      image: banner,
    },
    {
      id: 2,
      image: banner,
    },
    {
      id: 3,
      image: banner,
    },
    {
      id: 4,
      image: banner,
    },
    {
      id: 5,
      image: banner,
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
    <section className="flex justify-center items-center h-52 w-full px-5">
      <div className="flex flex-col justify-center items-center h-full py-5 w-full">
        <Carousel
          className="flex justify-center items-center w-full"
          opts={{
            loop: true,
          }}
          plugins={plugin.current}
        >
          <CarouselContent className="flex h-full">
            {corouselItems.map((item) => {
              return (
                <CarouselItem
                  key={item.id}
                  className="flex justify-center items-center w-[80%]"
                >
                  <Image
                    src={item.image}
                    alt="banner"
                    className="w-2/3 h-52 rounded-xl shadow shadow-slate-800 object-cover"
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

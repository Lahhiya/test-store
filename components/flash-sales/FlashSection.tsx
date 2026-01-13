"use client";
import { useRef } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import AutoScroll from "embla-carousel-auto-scroll";
import FlashCollection from "@/api/FlashCollection.json"
import FlashItem from "@/components/flash-sales/FlashItem";
import { FlashItemTypes } from "../../schema/FlashItem.schemas";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FlashSection() {
  const productItem = FlashCollection as FlashItemTypes[];
  const plugin = useRef([
    AutoScroll({
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
  ]);
  return (
    <section className="bg-slate-100 border border-slate-300 rounded-lg p-5 h-auto">
      <div className="flex flex-col justify-center">
        <div className="flex justify-start items-center gap-2">
          <h2 className="text-2xl font-semibold">Flash Sale</h2>
          <DynamicIcon name="flame" size={40} color="orange" />
        </div>
        <div className="flex justify-center mt-3 gap-5">
          <Carousel
            className="w-full px-10"
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={plugin.current}
          >
            <CarouselContent className="-ml-4">
              {productItem.map((item: FlashItemTypes) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 basis-full md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <FlashItem productItem={item} />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

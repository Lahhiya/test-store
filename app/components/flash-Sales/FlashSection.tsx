"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import { useRef } from "react";
import FlashItem from "./FlashItem";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FlashSection() {
  const productItem: any = [
    {
      id: 1,
      name: "Weekly Diamond Pass",
      subCategory: "mobile legend",
      price: 30581,
      discount: 11,
      stock: 25,
      sold: 18,
    },
    {
      id: 2,
      name: "2010 (1708 + 302)",
      subCategory: "mobile legend",
      price: 527250,
      discount: 8,
      stock: 8,
      sold: 2,
    },
    {
      id: 3,
      name: "3 Diamonds",
      subCategory: "mobile legend",
      price: 1195,
      discount: 80,
      stock: 50,
      sold: 32,
    },
    {
      id: 4,
      name: "5 Diamonds",
      subCategory: "mobile legend",
      price: 1579,
      discount: 12,
      stock: 40,
      sold: 28,
    },
    {
      id: 5,
      name: "12 (11+1) Diamonds",
      subCategory: "mobile legend",
      price: 3688,
      discount: 5,
      stock: 30,
      sold: 22,
    },
    {
      id: 6,
      name: "19 (17+2) Diamonds",
      subCategory: "mobile legend",
      price: 5797,
      discount: 7,
      stock: 25,
      sold: 19,
    },
    {
      id: 7,
      name: "28 (25+3) Diamonds",
      subCategory: "mobile legend",
      price: 8436,
      discount: 10,
      stock: 20,
      sold: 15,
    },
    {
      id: 8,
      name: "44 (40+4) Diamonds",
      subCategory: "mobile legend",
      price: 12654,
      discount: 12,
      stock: 18,
      sold: 14,
    },
    {
      id: 9,
      name: "85 (77+8) Diamonds",
      subCategory: "mobile legend",
      price: 24254,
      discount: 15,
      stock: 15,
      sold: 11,
    }
    // ,
    // {
    //   id: 10,
    //   name: "170 (154+16) Diamonds",
    //   subCategory: "mobile legend",
    //   price: 48507,
    //   discount: 18,
    //   stock: 10,
    //   sold: 7,
    // },
    // {
    //   id: 11,
    //   name: "169 Diamonds",
    //   subCategory: "mobile legend",
    //   price: 65800,
    //   discount: 20,
    //   stock: 8,
    //   sold: 6,
    // },
    // {
    //   id: 12,
    //   name: "59 (53+6) Diamonds",
    //   subCategory: "mobile legend",
    //   price: 16872,
    //   discount: 10,
    //   stock: 22,
    //   sold: 17,
    // },
  ];
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
              {productItem.map((item: any) => {
                return (
                  <CarouselItem key={item.id} className="pl-4 basis-1/5">
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

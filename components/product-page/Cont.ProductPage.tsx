"use client";

import { productDataType } from "@/schema/ProductItem.schemas";
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import pay from "@/assets/dummy/payment.png"
import FormProductPage from "./Form.ProductPage";

export default function ContProductPage({ datas }: { datas: productDataType}) {
    const [selected, setSelected] = useState<number>(0);

    return (
      <div className="flex flex-col gap-4 col-span-3 bg-card border border-border rounded-xl p-6 shadow-sm">
        <h2 className="text-3xl uppercase font-semibold">{datas[0].brand}</h2>
        <h2 className="capitalize font-semibold text-card-foreground text-lg">
          Pilih Nominal
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {datas.map((data) => {
            const isSelected = selected === data.id;
            return (
              <button
                onClick={() => setSelected(data.id)}
                key={data.id}
                className={cn(
                  "flex flex-col items-center justify-center h-14 w-full text-xs border rounded-lg p-2 transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/20 shadow-md transform scale-105"
                    : "bg-background border-input hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <h2 className="font-medium text-center line-clamp-2">
                  {data.name}
                </h2>
              </button>
            );
          })}
        </div>
        <FormProductPage datas={datas} selected={selected} />
      </div>
    );
}

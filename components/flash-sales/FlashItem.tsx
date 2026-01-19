"use client";
import Image from "next/image";
import Link from "next/link";
import { FlashItemTypes } from "../../schema/FlashItem.schemas";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function FlashItem({
  productItem,
}: {
  productItem: FlashItemTypes;
}) {




  const sold = (productItem.sold / productItem.stock) * 100;
  const stockLeft = productItem.stock - productItem.sold;
  const discountPrice =
    productItem.price - (productItem.price * productItem.discount) / 100;
  const discountedPrice = Number(discountPrice.toFixed(0));


  const slug = productItem.brand.toLowerCase().replace(" ", "-");

  return (
    <Link href={`/${productItem.category}/${slug}`} className="block w-full">
      <Card className="w-full min-h-[320px] flex flex-col justify-between overflow-hidden">
        <CardHeader className="p-4 flex flex-col items-center">
          <div className="hidden md:block relative w-24 h-24 mb-2">
            <Image
              src={`/products/${productItem.image}.png`}
              fill
              alt="product"
              className="object-cover rounded-2xl"
            ></Image>
          </div>
          <div className="space-y-1 text-center">
            <CardTitle className="text-2xl md:text-sm line-clamp-1">
              {productItem.brand}
            </CardTitle>
            <CardDescription className="text-lg md:text-xs">
              {productItem.product}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-2">
          <Badge variant={"destructive"}>{productItem.discount}% OFF</Badge>
          <div className="flex justify-between items-baseline gap-1 w-full">
            <div className="flex justify-start items-center gap-1">
              <p className="line-through  md:text-xs text-muted-foreground">
                Rp.{productItem.price.toLocaleString()}
              </p>
              <p className="text-sm font-bold text-primary">
                Rp.{discountedPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col gap-2">
          <div className="flex justify-between w-full ">
            <span className="text-sm font-medium">Tersisa: {stockLeft}</span>
          </div>
          <Progress value={sold} className="h-1.5"></Progress>
        </CardFooter>
      </Card>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { hotItemType } from "@/schema/HotItem.schema";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import productIcon from "@/assets/products/banner.webp";

export default function ProductItem({ item }: { item: hotItemType }) {
  return (
    <Link href={`/product/${item.id}`} className="group">
      <Card className="h-44 gap-2 relative hover:shadow-md border-muted hover:border-primary hover:scale-105 duration-100">
        <CardHeader className="p-3 h-1/2 w-full  flex justify-center items-center bg-slate-50">
          <div className="relative w-16 h-16">
            <Image
              src={productIcon}
              alt={item.brand}
              fill
              className="object-contain rounded-md w-full"
            />
          </div>
        </CardHeader>
        <CardContent className="p-3 h-1/2 text-center flex flex-col gap-1">
          <CardTitle className="text-md font-se line-clamp-1">
            {item.brand}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {item.name}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

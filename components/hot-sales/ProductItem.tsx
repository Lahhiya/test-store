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

export default function ProductItem({ item }: { item: hotItemType }) {
  const slug = item.brand.toLowerCase().replace(" ","-")
  return (
    <Link href={`/${item.category}/${slug}`} className="group">
      <Card className="h-44 gap-2 relative hover:shadow-md border-muted hover:border-primary hover:scale-105 duration-100">
        <CardHeader className="p-3 h-1/2 w-full  flex justify-center items-center bg-slate-50">
          <div className="relative w-16 h-16">
            <Image
              src={`/products/${item.image}.png`}
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
            {item.product}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

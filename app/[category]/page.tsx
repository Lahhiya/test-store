import { productType } from "@/schema/ProductItem.schemas";
import ProductColletion from "@/api/ProductCollections.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item } from "@radix-ui/react-select";

export default async function PageCategory({params} : { params : Promise<{category : string}>}) {
  const datas = ProductColletion as productType[] ;
  const {category} = await params;
  const whiteList = datas.flatMap((data)=> data.name)

  if(!whiteList.includes(category)){
    notFound();
  }

  const data = datas.map((data)=> data.data).flat()
  const filterByCategory = [... new Set(data.filter((data)=> data.category === category))]
  const filterPerBrand = [
    ...new Map(filterByCategory.map((item) => [item.brand, item])).values(),
  ];
  console.log(filterPerBrand)
  return (
    <div className="grid grid-cols-5 gap-3.5">
      {
        filterPerBrand.map((item)=>{
          return(
        <Link href={`/${item.category}/${item.slug}`} className="group" key={item.id}>
          <Card className="h-44 gap-2 relative hover:shadow-md border-muted hover:border-primary hover:scale-105 duration-100">
            <CardHeader className="p-3 h-1/2 w-full  flex justify-center items-center">
              <div className="relative w-16 h-16">
                <Image
                  src={`/products/${item.image}.png`}
                  alt={category}
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
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
          )
        })
      }
    </div>
  );
}
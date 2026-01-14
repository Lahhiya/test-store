import { productDataType } from "@/schema/ProductItem.schemas";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import banner from "@/assets/products/banner.webp"

export default function DesProductPage({data} : {data : string}) {
  return (
    <div className="w-full max-h-[400px] col-span-2 bg-card border border-border rounded-lg p-5 shadow-sm">
      <div className="grid gap-5 grid-cols-3"> 
        <div className="col-span-1 my-3">
          <Image
            src={banner}
            alt="icon"
            className="object-cover w-3/5 rounded-md shadow shadow-white"
          />
        </div>
        <div className="col-span-2 flex items-center">
          <h2 className="text-3xl uppercase font-semibold">{data}</h2>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">cara melakukan TopUp {data} </h3>
        <p className="font-medium text-gray-500">1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="font-medium text-gray-500">2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="font-medium text-gray-500">3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="font-medium text-gray-500">4. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p className="font-medium text-gray-500">5. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
  );
}
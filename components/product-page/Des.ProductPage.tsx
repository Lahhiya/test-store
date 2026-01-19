import Image from "next/image";
import { Badge } from "../ui/badge";
import { Timer } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { wrapBrandInfoType } from "@/schema/wrapper.schemas";
import { check } from "zod";
export default function DesProductPage({brandInfo} : {brandInfo : wrapBrandInfoType}) {
  return (
    <div className="w-full max-h-[500px] col-span-2 bg-card rounded-lg p-5 shadow shadow-gray-300">
      <div className="flex flex-col gap-5 items-center shadow shadow-gray-200 p-2 rounded-lg ">
        <div className="gap-2 p-4 my-3 min-h-full grid grid-cols-5 w-full rounded-2xl overflow-hidden">
          <Image
            src={`/products/${brandInfo.image}.png`}
            width={100}
            height={100}
            alt="icon"
            className="object-cover w-24 rounded-lg col-span-2"
          />
          <div className="flex flex-col gap-2 justify-center col-span-3">
            <Link href={`/${brandInfo.category}`} className="group">
              <h2 className="text-2xl uppercase font-semibold">
                {brandInfo.name}
              </h2>
              <p className="uppercase group-hover:underline text-xl font-medium">
                {brandInfo.category}
              </p>
            </Link>
            <div className="flex gap-1">
              <Badge className="bg-blue-500 text-xs">
                <DynamicIcon name="check-check" />
                Verified
              </Badge>
              <Badge className="bg-green-500 text-xs">
                <DynamicIcon name="shield-check" />
                Trusted
              </Badge>
            </div>
          </div>
        </div>
        <span className="w-[90%]">
          <Separator className="my-4" />
        </span>
        <div className="flex flex-col items-baseline">
          <h3 className="text-lg font-semibold capitalize">
            Cara Melakukan Pembayaran :
          </h3>
          <ul className="text-sm lowercase">
            <li>
              <p>
                1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </li>
            <li>
              <p>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, officiis.
              </p>
            </li>
            <li>
              <p>
                3.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                consequuntur quasi voluptates.
              </p>
            </li>
            <li>
              <p>
                4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque repellat quo fuga porro fugiat!
              </p>
            </li>
            <li>
              <p>5. Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
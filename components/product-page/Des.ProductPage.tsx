import Image from "next/image";
import banner from "@/assets/products/banner.webp"
import { Badge } from "../ui/badge";
import { Timer } from "lucide-react";
import { History } from "lucide-react";
import { Separator } from "../ui/separator";
export default function DesProductPage({brandInfo} : {brandInfo : string|undefined}) {
  return (
    <div className="w-full max-h-[500px] col-span-2 bg-card rounded-lg p-5 shadow shadow-gray-300">
      <div className="flex flex-col gap-5 items-center shadow shadow-gray-200 p-2 rounded-lg ">
        <div className="gap-2 p-4 my-3 min-h-full flex justify-evenly w-full rounded-2xl overflow-hidden">
          <Image
            src={banner}
            alt="icon"
            className="object-cover w-24 rounded-lg"
          />
          <div className="flex flex-col gap-2 justify-center">
            <h2 className="text-3xl uppercase font-semibold">{brandInfo}</h2>
            <div className="grid grid-rows-2 gap-1">
              <Badge
                className="bg-blue-500 badge shadow-sm shadow-gray-500 text-slate-800"
              >
                <History />
                jaminan uang kembali
              </Badge>
              <Badge className="bg-green-500 badge shadow-sm shadow-gray-500 text-slate-800">
                <Timer />
                maximal 5 menit
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
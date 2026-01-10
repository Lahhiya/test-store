import Image from "next/image"
import Link from "next/link"
import banner from "../assets/banners/test-banner.jpg"
import { DynamicIcon } from "lucide-react/dynamic";
export default function BannerSection() {
    return (
      <section className="w-full flex justify-center items-center">
        <div className="flex w-full h-auto min-h-[100px] justify-center items-center">
          <button  className="flex justify-center items-center cursor-pointer">
            <DynamicIcon name="chevron-left" size={80} />
          </button>
          <div className="">
            <Image src={banner} alt="banner" height={600} width={200} />
          </div>
          <button className="flex justify-center items-center cursor-pointer">
            <DynamicIcon name="chevron-right" size={80} />
          </button>
        </div>
      </section>
    );
}
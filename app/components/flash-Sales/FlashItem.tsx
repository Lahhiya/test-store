import Image from "next/image";
import Link from "next/link";
import product from "@/app/assets/products/product-test.webp";

export default function FlashItem() {
    const productItem : any ={
        name : "Weekly Diamond",
        subCategory : "mobile legend",
        price : 15000,
        amount : 100,
        progres : 50,
    }
    return (
      <Link
        href={"/"}
        className="flex flex-col py-5 px-2 gap-2 p-5 w-60 h-60 justify-center items-center bg-white border border-slate-300 rounded-lg"
      >
        <div className="flex flex-col justify-center items-start">
          <div className="flex gap-2">
            <Image src={product} alt="product" width={60} className="rounded-[20%]"/>
            <div className="flex flex-col">
              <h3 className="text-md font-bold">{productItem.name}</h3>
              <p className="text-sm font-light">{productItem.subCategory}</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium">Rp.{productItem.price}</p>
          </div>
          <div>
          </div>
        </div>
      </Link>
    );
}
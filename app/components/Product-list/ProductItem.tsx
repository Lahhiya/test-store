import Image from "next/image";
import Link from "next/link";
import product from "@/app/assets/products/product-test.webp";

export default function ProductItem() {

  return (
    <Link href={'/'} className="flex flex-col py-5 px-2 gap-2 p-5 h-auto justify-center items-center bg-white border border-slate-300 rounded-lg">
      <Image src={product} alt="product" width={70} height={70} className="rounded-[20%]" />
      <h3 className="text-sm font-medium uppercase">Product Name</h3>
    </Link>
  );
}

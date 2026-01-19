"use client"
import ProductItem from "@/components/hot-sales/ProductItem"
import { hotItemType } from "@/schema/HotItem.schema";
export default function ProductSection({hotItems}: {hotItems: hotItemType[]}) {
  return (
    <section className="bg-slate-100 border border-slate-300 rounded-lg p-5">
      <h2 className="text-2xl font-semibold uppercase">Lagi Populer :</h2>
      <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-2">
      {
        hotItems.map((item) => {
          return <ProductItem key={item.id} item={item}/>
        })
      }
      </div>
    </section>
  );
}
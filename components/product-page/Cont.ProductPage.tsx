"use client";

import { productDataType } from "@/schema/ProductItem.schemas";
import { modalType, wrapperDetailTrdType } from "@/schema/wrapper.schemas";
import { cn } from "@/lib/utils";
import FormProductPage from "./Form.ProductPage";
import Link from "next/link";
import { wrapBrandInfoType } from "@/schema/wrapper.schemas";

export default function ContProductPage({
  datas,
  setModal,
  wrapDetailTrd,
  brandInfo
}: {
  datas: productDataType;
  setModal: modalType;
  wrapDetailTrd:wrapperDetailTrdType
  brandInfo:wrapBrandInfoType
}) {
  function handleSelect(id:number){
    wrapDetailTrd.setDetailTrd({ key: "ADD_ID", payload: id });
    wrapDetailTrd.setDetailTrd({ key : "ADD_DISCOUNT", payload : 0})
  }

  return (
    <div className="flex flex-col gap-4 col-span-3 bg-card border border-border rounded-xl p-6 shadow-sm">
      <Link href={`/${brandInfo.category}/`}>
        <h2 className="text-3xl uppercase font-semibold">{brandInfo.name}</h2>
      </Link>
      <h2 className="capitalize font-semibold text-card-foreground text-lg">
        Pilih Nominal
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {datas.map((data) => {
          return (
            <button
              key={data.id}
              onClick={() => {handleSelect(data.id)}}
              className={cn(
                "flex flex-col items-center justify-center h-14 w-full text-xs border rounded-lg p-2 transition-all duration-200 cursor-pointer",
                wrapDetailTrd.detailTrd.id === data.id
                  ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/20 shadow-md transform scale-105"
                  : "bg-background border-input hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <h2 className="font-medium text-center line-clamp-2">
                {data.product}
              </h2>
            </button>
          );
        })}
      </div>
      <FormProductPage
        datas={datas}
        setModal={setModal}
        wrapDetailTrd={wrapDetailTrd}
      />
    </div>
  );
}

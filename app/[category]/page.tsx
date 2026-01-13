import { productType } from "@/schema/ProductItem.schemas";
import ProductColletion from "@/api/ProductCollections.json";
import { notFound } from "next/navigation";

export default async function PageCategory({params} : { params : Promise<{category : string}>}) {
  const datas = ProductColletion as productType[] ;
  const {category} = await params;
  const whiteList = datas.flatMap((data)=> data.name)

  if(!whiteList.includes(category)){
    notFound();
  }

  return(
    <>
    ini route dari category {category}
    </>
  )
}
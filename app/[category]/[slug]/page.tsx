import { productType } from "@/schema/ProductItem.schemas";
import ProductColletion from "@/api/ProductCollections.json";
import { notFound } from "next/navigation";
import DesProductPage from "@/components/product-page/Des.ProductPage";
import ContProductPage from "@/components/product-page/Cont.ProductPage";

export default async function PageProduct({params}: {params: Promise<{ slug: string; category: string }>}) {
  const item = await params;
  const datas = ProductColletion as productType[];
  const getIndex = datas.findIndex((data)=> data.name === item.category)

  // validate category
  if(getIndex === -1){
    return notFound();
  }
  const getData = datas[getIndex].data
  const whiteSlug = [...new Set(getData.flatMap((data) => data.slug))];

  // validate slug
  if(!whiteSlug.includes(item.slug)){
    return notFound();
  }

  const indeticalData = getData.filter((data)=> data.slug === item.slug)
  return (
    <div className="grid gap-5 mx-5 h-100 grid-cols-1 md:grid-cols-5">
      <DesProductPage  data={getData[0].brand} />
      <ContProductPage datas={indeticalData} />
    </div>
  );
}

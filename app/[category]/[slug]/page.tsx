import { productType } from "@/schema/ProductItem.schemas";
import ProductColletion from "@/api/ProductCollections.json";
import { notFound } from "next/navigation";

export default async function PageProduct({params}: {params: Promise<{ slug: string; category: string }>}) {
  const item = await params;
  const datas = ProductColletion as productType[];
  const getIndex = datas.findIndex((data)=> data.name === item.category)

  if(getIndex === -1){
    return notFound();
  }
  const getData = datas[getIndex].data
  const whiteSlug = [...new Set(getData.flatMap((data) => data.slug))];

  if(!whiteSlug.includes(item.slug)){
    return notFound();
  }

  return (
    <div>
      ini route dari category {item.category} dari {item.slug}
    </div>
  );
}

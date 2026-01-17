import WrapperProductPage from "@/components/product-page/wrapper.ProductPage";
export default async function PageProduct({params}: {params: Promise<{ slug: string; category: string }>}) {
  const item = await params;
  return (
    <>
    <WrapperProductPage item={item}/>
    </>
  );
}

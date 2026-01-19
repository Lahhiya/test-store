import BannerSection from "../components/BannerSection";
import FlashSection from "../components/flash-sales/FlashSection";
import ProductSection from "../components/hot-sales/ProductSection";
import ProductCollections from "@/api/ProductCollections.json";
import { productType } from "../schema/ProductItem.schemas";
import { hotItemType } from "../schema/HotItem.schema";

export default function Home() {
  const colletion = ProductCollections as productType[];
  const hotITemAmout = 10;
  function getAllPrice(): hotItemType[] {
    return colletion.flatMap((coll) => {
      return coll.data.map((item) => {
        return {
          id: item.id,
          brand: item.brand,
          category: item.category,
          product : item.product,
          sold: item.sold,
          image: item.image,
        };
      });
    });
  }
  const HotItems = getAllPrice()
    .sort((a, b) => a.sold - b.sold)
    .slice(0, hotITemAmout);
  return (
    <div className="flex flex-col w-full gap-5">
      <BannerSection />
      <FlashSection />
      <ProductSection hotItems={HotItems} />
    </div>
  );
}

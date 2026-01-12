import BannerSection from "./components/BannerSection";
import FlashSection from "./components/flash-Sales/FlashSection";
import ProductSection from "./components/Product-container/ProductSection";
import ProductCollections from "../app/api/ProductCollections.json";
import { productType } from "./schema/ProductItem.schemas";
import { hotItemType } from "./schema/HotItem.schema";

export default function Home() {
  const colletion = ProductCollections as productType[];
  const hotITemAmout = 10;
  function getAllPrice(): hotItemType[] {
    return colletion.flatMap((coll) => {
      return coll.data.map((item) => {
        return {
          id: item.id,
          brand: item.brand,
          name: item.name,
          sold: item.sold,
          image: item.image,
        };
      });
    });
  }
  const HotItems = getAllPrice().sort((a, b) => a.sold - b.sold).slice(0, hotITemAmout);
  return (
    <div className="flex flex-col w-full gap-5">
      <BannerSection />
      <FlashSection />
      <ProductSection hotItems={HotItems}/>
    </div>
  );
}

import BannerSection from "./components/BannerSection";
import FlashSection from "./components/flash-Sales/FlashSection";
import ProductSection from "./components/Product-list/ProductSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-5">
      <BannerSection />
      <FlashSection />
      <ProductSection />
      <ProductSection />
    </div>
  );
}

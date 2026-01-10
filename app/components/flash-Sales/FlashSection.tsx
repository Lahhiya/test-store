import { DynamicIcon } from "lucide-react/dynamic";
import FlashItem from "./FlashItem";

export default function FlashSection() {
    return (
      <section className="bg-slate-100 border border-slate-300 rounded-lg p-5 h-[200px">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start items-center gap-2">
            <h2 className="text-2xl font-semibold">Flash Sale</h2>
            <DynamicIcon name="flame" size={40} color="orange" />
          </div>
          <div className="flex items-center justify-center mt-3 gap-5">
            <FlashItem/>
            <FlashItem/>
            <FlashItem/>
            <FlashItem/>
          </div>
        </div>
      </section>
    );
}
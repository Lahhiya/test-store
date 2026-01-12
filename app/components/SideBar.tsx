import { DynamicIcon } from "lucide-react/dynamic";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SideBar() {
  const iconSize = 40;
  return (
    <nav className="flex flex-col py-10 justify-around items-center h-full gap-5">
      <Link
        href="/promo"
        className="nav-item flex flex-col justify-center items-center"
      >
        <DynamicIcon name="ticket-slash" size={iconSize} />
        <p className="text-xs">Promo</p>
      </Link>
      <div className="w-[75%]">
        <Separator className="bg-slate-400" />
      </div>
      <Link
        href="/flash-sale"
        className="nav-item flex flex-col justify-center items-center"
      >
        <DynamicIcon name="flame" size={iconSize} />
        <p className="text-xs">Flash Sale</p>
      </Link>
      <div className="w-[75%]">
        <Separator className="bg-slate-400" />
      </div>
      <Link
        href="/hot-sales"
        className="nav-item flex flex-col justify-center items-center"
      >
        <DynamicIcon name="heart" size={iconSize} />
        <p className="text-xs">For You</p>
      </Link>
      <div className="w-[75%]">
        <Separator className="bg-slate-400" />
      </div>
      <Link
        href="/rewards"
        className="nav-item flex flex-col justify-center items-center"
      >
        <DynamicIcon name="gift" size={iconSize} />
        <p className="text-xs">Rewards</p>
      </Link>
    </nav>
  );
}

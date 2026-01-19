import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export default function SideBar() {
  const iconSize = 20;
  return (
    <nav className="sideBar-container">
      <Link
        href="/promo"
        className="sideBar-item"
      >
        <DynamicIcon name="ticket-slash" size={iconSize} />
        <p className="text-xs">Promo</p>
      </Link>
      <div className="w-[75%]">
      </div>
      <Link
        href="/flash-sale"
        className="sideBar-item"
      >
        <DynamicIcon name="flame" size={iconSize} />
        <p className="text-xs">Flash Sale</p>
      </Link>
      <div className="w-[75%]">
      </div>
      <Link
        href="/hot-sales"
        className="sideBar-item"
      >
        <DynamicIcon name="heart" size={iconSize} />
        <p className="text-xs">For You</p>
      </Link>
      <div className="w-[75%]">
      </div>
      <Link
        href="/rewards"
        className="sideBar-item"
      >
        <DynamicIcon name="gift" size={iconSize} />
        <p className="text-xs">Rewards</p>
      </Link>
    </nav>
  );
}

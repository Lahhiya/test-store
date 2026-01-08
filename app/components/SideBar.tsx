import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export default function SideBar() {
    const iconSize = 30
    return (
      <nav className="flex justify-center fixed h-screen left-0 p-3.5 shadow-lg bg-slate-100 shadow-slate-300">
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-center items-center">
            <Link href={"/"} className="nav-item">
              <DynamicIcon name="menu" size={iconSize + 10} />
              <p>menu</p>
            </Link>
          </div>
          <div className="flex flex-col justify-around items-center gap-5">
            <Link href={"#Promos"} className="nav-item">
              <DynamicIcon name="ticket-percent" size={iconSize} />
              <p>Promo</p>
            </Link>
            <Link href={"#Games"} className="nav-item">
              <DynamicIcon name="gamepad-2" size={iconSize} />
              <p>Topup</p>
            </Link>
            <Link href={"#Apps"} className="nav-item">
              <DynamicIcon name="popcorn" size={iconSize} />
              <p>Apps</p>
            </Link>
            <Link href={"#Bills"} className="nav-item">
              <DynamicIcon name="scroll" size={iconSize} />
              <p>Bill</p>
            </Link>
            <Link href={"#Rewards"} className="nav-item">
              <DynamicIcon name="gift" size={iconSize} />
              <p>Reward</p>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/"} className="nav-item">
              <DynamicIcon name="settings" size={iconSize + 10} />
              <p>Settings</p>
            </Link>
          </div>
        </div>
      </nav>
    );
}

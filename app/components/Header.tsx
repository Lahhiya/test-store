import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import logo from "../assets/main/logo.png";
import Link from "next/link";

export default function Header() {
  const iconSize = 30;
  return (
    <header className="flex justify-between w-full items-center px-5 py-3 shadow shadow-slate-300 bg-slate-100 z-50">
      <Link href={"/"} className="flex items-center justify-center gap-3">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-4xl font-bold uppercase">Test Store</h1>
      </Link>
      <div className="flex items-center justify-center gap-3 border border-slate-200 rounded-full p-2">
        <div className="flex items-center justify-center gap-1">
          <DynamicIcon name="search" size={iconSize} />
        </div>
        <button className="flex items-center justify-center gap-1">
          <DynamicIcon name="user" size={iconSize} />
        </button>
        <button className="flex items-center justify-center gap-1">
          <DynamicIcon name="shopping-cart" size={iconSize} />
          <span className="text-lg hidden">0</span>
        </button>
      </div>
    </header>
  );
}

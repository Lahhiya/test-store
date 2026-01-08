import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/main/logo.png"
import { DynamicIcon } from "lucide-react/dynamic";

export default function Header() {
    return (
      <header className="flex items-center justify-between p-5 px-10 sticky w-screen h-16 bg-slate-100 shadow-slate-300">
        <Link
          href={"/"}
          className="flex items-center justify-center ps-16 w-3/12"
        >
          <Image src={Logo} alt="Logo" className="w-auto h-12" />
          <h1 className="text-4xl font-bold uppercase">Test Store</h1>
        </Link>
        <div className="flex items-center justify-evenly p-2 w-7/12 gap-2">
          <input
            type="text"
            placeholder="Mulai Mencari..."
            className="rounded-xl w-3/6 text-wrap bg-slate-200 shadow-slate-400"
          />
          <button
            className="flex items-center justify-center w-2/6 gap-2 border-sm bg-blue-500  text-white font-semibold rounded-xl"
          >
            <DynamicIcon name="log-in" size={30} color="gray" />
            Login
          </button>
          <div className="flex items-center justify-center w-1/6">
            <button
              className="flex items-center justify-center"
            >
              <DynamicIcon name="moon" size={40} color="gray" />
            </button>
          </div>
        </div>
      </header>
    );
}
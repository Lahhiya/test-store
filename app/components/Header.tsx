"use client"
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import logo from "../assets/main/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Header() {
  const [search,setSearch] = useState(false);
  const [isDark,setIsDark] = useState(false);
  const iconSize = 30;
  return (
    <header className="flex justify-between w-full items-center px-5 py-3 shadow shadow-slate-300 bg-slate-100 z-50">
      <Link href={"/"} className="flex items-center justify-center gap-3 w-1/4">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-4xl font-bold uppercase">Test Store</h1>
      </Link>
      <div
        className={`flex items-center justify-end gap-3 transition-all ${
          search ? "w-2/4" : "w-auto"
        }`}>
        <ButtonGroup className="h-full w-full">
          {search ? (
            <>
              <Input
                type="text"
                placeholder="mulai mencari..."
                className="w-1/2"
              ></Input>
              <Button
                onClick={() => setSearch(!search)}
                variant={"outline"}
                size={"icon-lg"}
                className="flex items-center justify-center gap-1 cursor-pointer"
              >
                <DynamicIcon name="x" size={iconSize} />
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setSearch(!search)}
              variant={"outline"}
              size={"icon-lg"}
              className="flex items-center justify-center gap-1 cursor-pointer"
            >
              <DynamicIcon name="search" size={iconSize} />
            </Button>
          )}
          <Button
            variant={"outline"}
            size={"icon-lg"}
            className="flex items-center justify-center gap-1 cursor-pointer"
          >
            <DynamicIcon name="user" size={iconSize} />
          </Button>
          <Button
            id="cart-info"
            variant={"outline"}
            size={"icon-lg"}
            className="flex flex-row items-center justify-center cursor-pointer"
          >
            <DynamicIcon name="shopping-cart" size={iconSize} />
            <Label htmlFor="cart-info">0</Label>
          </Button>
          <Button
            onClick={() => setIsDark(!isDark)}
            variant={"outline"}
            size={"icon-lg"}
            className="flex items-center justify-center gap-1 cursor-pointer"
          >
            <DynamicIcon
              name={isDark ? "moon" : "sun"}
              size={iconSize}
              className={isDark ? "text-blue-400" : "text-yellow-500"}
            />
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
}

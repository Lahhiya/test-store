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
    <header className="header-section">
      <Link href={"/"} className="header-brand">
        <Image src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
        <h1 className="text-lg font-bold uppercase">Test Store</h1>
      </Link>
      <div className={`header-container ${search ? "w-1/2" : "w-auto"}`}>
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

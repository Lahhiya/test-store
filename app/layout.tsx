import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test-Store",
  description: "Sebuah Store tester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased h-screen flex flex-col overflow-hidden bg-slate-50`}
      >
        <div className="flex-none z-50">
          <Header />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-[80px] shrink-0 bg-slate-100 shadow border-r border-slate-200 z-40">
            <SideBar />
          </aside>
          <main className="flex-1 overflow-y-auto relative p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

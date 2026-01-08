import SideBar from "./components/SideBar";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <aside className="flex justify-center">
    <Header />
    <SideBar />
    </aside>
    </>
  );
}
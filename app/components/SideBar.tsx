import { DynamicIcon } from "lucide-react/dynamic";
export default function SideBar() {
  const iconSize = 40;
  return (
    <nav className="flex flex-col justify-center items-center h-full gap-5">
      <div className="nav-item">
        <DynamicIcon name="home" size={iconSize} />
        <p>Menu</p>
      </div>
      <div className="nav-item">
        <DynamicIcon name="home" size={iconSize} />
        <p>Menu</p>
      </div>
      <div className="nav-item">
        <DynamicIcon name="home" size={iconSize} />
        <p>Menu</p>
      </div>
    </nav>
  );
}

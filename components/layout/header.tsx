import { header_icons, header_items } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import HeaderItem from "../header/header-item";
import HeaderIcon from "../header/header-icon";
import SearchBar from "../header/search-bar";

const Header = () => {
  return (
    <header className="bg-new-blue flex items-center justify-between px-12 py-2 h-[72px]">
      <div className="flex items-center gap-6">
        <Image src="/logo.png" alt="MRP Logo" width={82.77} height={32} />

        <nav className="flex items-center">
          {header_items.map((item) => (
            <HeaderItem key={item.href} item={item} />
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <SearchBar />
        <div className="flex items-center gap-3">
          {header_icons.map((item) => (
            <HeaderIcon key={item.name} item={item} />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Image src={"/avatar.png"} alt="Avatar" width={40} height={40} />
          <ChevronDown
            size={20}
            className="cursor-pointer hover:text-gray-300 text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

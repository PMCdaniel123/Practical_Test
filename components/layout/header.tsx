import { header_icons, header_items } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import HeaderItem from "../header/header-item";
import HeaderIcon from "../header/header-icon";
import SearchBar from "../header/search-bar";

const Header = () => {
  return (
    <header className="bg-new-blue flex items-center justify-between px-8 xl:px-12 py-2 h-[72px]">
      <div className="flex items-center gap-2 xl:gap-6">
        <div className="w-[60px] xl:w-[82.77px] h-auto">
          <Image
            src="/logo.png"
            alt="MRP Logo"
            width={82.77}
            height={32}
            className="w-full h-auto"
          />
        </div>

        <nav className="flex items-center w-full">
          {header_items.map((item) => (
            <HeaderItem key={item.href} item={item} />
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 xl:gap-6">
        <SearchBar />
        <div className="flex items-center gap-2 xl:gap-3">
          {header_icons.map((item) => (
            <HeaderIcon key={item.name} item={item} />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[24px] xl:w-[40px] h-auto">
            <Image src={"/avatar.png"} alt="Avatar" width={40} height={40} />
          </div>
          <ChevronDown className="cursor-pointer hover:text-gray-300 text-white h-4 w-4 xl:h-5 xl:w-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;

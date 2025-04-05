import { HeaderIconProps } from "@/types";

function HeaderIcon({ item }: { item: HeaderIconProps }) {
  const Icon = item.icon;

  return item.name === "Thông báo" ? (
    <div className="py-1 cursor-pointer hover:text-gray-300 relative text-white">
      <div className="absolute -top-[2px] left-2 xl:left-3 bg-red-01 rounded-full px-1 flex items-center justify-center">
        <span className="text-[8px] xl:text-xs">1</span>
      </div>
      <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
    </div>
  ) : (
    <div className="py-1 cursor-pointer hover:text-gray-300 text-white">
      <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
    </div>
  );
}

export default HeaderIcon;

import { HeaderIconProps } from "@/types";

function HeaderIcon({ item }: { item: HeaderIconProps }) {
  const Icon = item.icon;

  return item.name === "Thông báo" ? (
    <div className="py-1 cursor-pointer hover:text-gray-300 relative text-white">
      <div className="absolute -top-[2px] left-3 bg-red-01 rounded-full px-1 flex items-center justify-center">
        <span className="text-xs">1</span>
      </div>
      <Icon size={20} />
    </div>
  ) : (
    <div className="py-1 cursor-pointer hover:text-gray-300 text-white">
      <Icon size={20} />
    </div>
  );
}

export default HeaderIcon;

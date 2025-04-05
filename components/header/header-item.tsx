import { HeaderItemProps } from "@/types";
import Link from "next/link";

function HeaderItem({ item }: { item: HeaderItemProps }) {
  return (
    <div className="flex items-center justify-center px-2 py-1 text-neutral-001">
      <Link
        href={item.href}
        className="hover:underline font-normal text-sm px-1"
      >
        {item.name}
      </Link>
    </div>
  );
}

export default HeaderItem;

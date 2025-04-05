import { TopProductProps } from "@/types";
import Image from "next/image";

function TopProductItem({ item }: { item?: TopProductProps }) {
  return (
    <div className="shadow-md rounded-2xl p-6 flex flex-col">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-2xl xl:text-3xl text-light-blue">
            {item?.buy || 0}
          </p>
          <p className="font-normal text-xs xl:text-sm text-title">
            {item?.product || "Chưa có mặt hàng"}
          </p>
        </div>
        {item && (
          <div className="flex items-center gap-1">
            {item.percent > 0 ? (
              <Image src={"/ic-increase.png"} alt="up" width={24} height={24} />
            ) : (
              <Image
                src={"/ic-decrease.png"}
                alt="down"
                width={24}
                height={24}
              />
            )}
            <p className="font-medium text-sm text-neutral-01">
              {item.percent}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopProductItem;

import { month_list } from "@/constants";
import Select from "../select/select";
import TopProductItem from "../top-product/top-product-item";
import { TopProductProps } from "@/types";

function TopProduct({ list }: { list: TopProductProps[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg capitalize text-title">
          Top sản phẩm sản xuất nhiều nhất
        </p>
        <Select list={month_list} icon />
      </div>
      {list.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {list.map((item) => (
            <TopProductItem key={item.product} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-6">
          {[...Array(5)].map((_, i) => (
            <TopProductItem key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TopProduct;

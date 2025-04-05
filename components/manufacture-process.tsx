import { ProgressDataProps } from "@/types";

function ManufactureProcess({ list }: { list: ProgressDataProps[] }) {
  return list.length > 0 ? (
    <div className="gap-8 px-6 pb-6 flex flex-col">
      {list.map((item, idx) => (
        <div key={idx} className="gap-2 flex flex-col">
          <div className="flex justify-between items-center text-primary">
            <span className="text-sm font-medium">{item.name}</span>
            <p className="text-sm font-semibold">
              {item.value} cái{" "}
              <span className="text-neutral-03 font-normal">
                ({item.percent}%)
              </span>
            </p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-01 rounded-full"
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="gap-8 px-6 pb-6 flex flex-col">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="gap-2 flex flex-col">
          <div className="flex justify-between items-center text-primary">
            <span className="text-sm font-medium">Chưa có mặt hàng</span>
            <p className="text-sm font-semibold">-</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}

export default ManufactureProcess;

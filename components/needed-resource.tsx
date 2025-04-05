import { MaterialDataProps } from "@/types";
import Image from "next/image";

function NeededResource({ list }: { list: MaterialDataProps[] }) {
  return (
    <table className="w-full text-sm">
      <thead className="bg-third">
        <tr
          className="grid p-4 text-xs font-semibold text-neutral-04 space-x-2"
          style={{ gridTemplateColumns: "0.5fr 3fr 1fr 1fr" }}
        >
          <th className="text-center">STT</th>
          <th className="text-left">Nguyên vật liệu</th>
          <th className="text-left">Đơn vị tính</th>
          <th className="text-center">Số lượng</th>
        </tr>
      </thead>
      <tbody>
        {list.length > 0 ? (
          list.map((item, index) => (
            <tr
              key={index}
              className="border-t grid p-4 text-sm font-semibold text-neutral-07 items-center space-x-2"
              style={{ gridTemplateColumns: "0.5fr 3fr 1fr 1fr" }}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-left">
                <div className="flex gap-2 items-start">
                  <Image
                    src={"/logo_item.png"}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col gap-1">
                    <p>{item.name}</p>
                    <p className="text-xs font-normal text-neutral-003">
                      (none)
                    </p>
                    <p className="text-xs font-normal text-01">
                      {item.unit === "Cuộn" ? "NVL_000014" : "NVL_000024"}
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-left">{item.unit}</td>
              <td className="text-center">{item.quantity}</td>
            </tr>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 mt-8">
            <Image src={"/empty.png"} alt="Empty" width={250} height={250} />
            <p className="text-2xl font-medium text-neutral-04">
              Chưa có dữ liệu
            </p>
          </div>
        )}
      </tbody>
    </table>
  );
}

export default NeededResource;

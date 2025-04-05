"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ProductionStatusProps } from "@/types";
import { productionUnStatus } from "@/constants";

const chartConfig = {
  value: {
    label: "Lệnh sản xuất",
  },
  uncompleted: {
    label: "Chưa hoàn thành",
    color: "#FF8F0D",
  },
  processing: {
    label: "Đang sản xuất",
    color: "#0375F3",
  },
  completed: {
    label: "Hoàn thành",
    color: "#1FC583",
  },
} satisfies ChartConfig;

export function ManufactureSituation({
  list,
}: {
  list: ProductionStatusProps[];
}) {
  const displayList = list.length > 0 ? list : productionUnStatus;

  const total = React.useMemo(() => {
    return list.reduce((acc, curr) => acc + curr.value, 0);
  }, [list]);

  return (
    <div className="flex flex-col w-full px-4 xl:px-6">
      <div className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            {list.length > 0 && (
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
            )}
            <Pie
              data={displayList}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Lệnh sản xuất
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
      {list.length > 0 ? (
        <div className="flex items-stretch justify-between gap-2">
          {list.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 p-2 border rounded-xl w-1/3"
            >
              <p
                className={`font-semibold text-lg xl:text-2xl`}
                style={{ color: item.fill }}
              >
                {item.value.toLocaleString()}
              </p>
              <p className="text-xs xl:text-sm font-normal">{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-stretch justify-between gap-2">
          <div className="flex flex-col gap-1 p-2 border rounded-xl w-1/3">
            <p
              className={`font-semibold text-2xl`}
              style={{ color: chartConfig.uncompleted.color }}
            >
              0
            </p>
            <p className="text-sm font-normal">Chưa hoàn thành</p>
          </div>
          <div className="flex flex-col gap-1 p-2 border rounded-xl w-1/3">
            <p
              className={`font-semibold text-2xl`}
              style={{ color: chartConfig.processing.color }}
            >
              0
            </p>
            <p className="text-sm font-normal">Đang sản xuất</p>
          </div>
          <div className="flex flex-col gap-1 p-2 border rounded-xl w-1/3">
            <p
              className={`font-semibold text-2xl`}
              style={{ color: chartConfig.completed.color }}
            >
              0
            </p>
            <p className="text-sm font-normal">Hoàn thành</p>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ProductionDataProps } from "@/types";

const chartConfig = {
  plan: {
    label: "Kế hoạch",
    color: "#0375F3",
  },
  actual: {
    label: "Thực hiện",
    color: "#1FC583",
  },
} satisfies ChartConfig;

export function ManufacturePlan({ list }: { list: ProductionDataProps[] }) {
  return (
    <div className="px-6 relative mt-6">
      <p className="absolute -top-8 left-10 text-xs text-neutral-03">Đơn vị</p>
      <p className="absolute bottom-0 left-6 text-xs text-neutral-03">
        Mặt hàng
      </p>
      <div className="flex gap-4 items-center absolute -top-8 right-6">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-3 rounded-2xl bg-light-blue" />
          <p className="text-sm font-medium">Kế hoạch</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-3 rounded-2xl bg-green-01" />
          <p className="text-sm font-medium">Thực hiện</p>
        </div>
      </div>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={list}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={16}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="plan"
            fill="var(--color-plan)"
            radius={4}
            barSize={20}
          />
          <Bar
            dataKey="actual"
            fill="var(--color-actual)"
            radius={4}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

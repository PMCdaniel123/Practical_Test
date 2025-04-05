"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TopCustomerProps } from "@/types";

const chartConfig = {
  quantity: {
    label: "Sản lượng",
    color: "#0375F3",
  },
} satisfies ChartConfig;

export function TopCustomer({ list }: { list: TopCustomerProps[] }) {
  return (
    <div className="px-4 py-6 xl:p-6 relative">
      <p className="absolute top-3 left-20 xl:top-4 xl:left-22 text-xs text-neutral-03">
        Khách hàng
      </p>
      <p className="absolute bottom-[30px] xl:bottom-7 left-24 xl:left-26 text-xs text-neutral-03">
        Mặt hàng
      </p>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={list} layout="vertical">
          <CartesianGrid horizontal={false} />
          <XAxis
            type="number"
            dataKey="quantity"
            tickLine={false}
            tickMargin={12}
            axisLine={false}
            domain={[0, 3200]}
            ticks={[0, 800, 1600, 2400, 3200]}
          />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              value.length > 30 ? value.slice(0, 30) + "..." : value
            }
            width={140}
            interval={0}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel hideIndicator />}
          />
          <Bar
            dataKey="quantity"
            fill="var(--color-quantity)"
            radius={4}
            barSize={8}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

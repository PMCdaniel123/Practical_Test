import {
  HeaderIconProps,
  HeaderItemProps,
  MaterialDataProps,
  ProductionDataProps,
  ProductionStatusProps,
  ProgressDataProps,
  SelectProps,
  TopCustomerProps,
  TopProductProps,
} from "@/types";
import {
  Bell,
  CircleHelp,
  GitCompareArrows,
  MessageSquareText,
  Settings,
} from "lucide-react";

export const header_items: HeaderItemProps[] = [
  {
    name: "Danh mục",
    href: "/a",
  },
  {
    name: "Bán & Xuất hàng",
    href: "/b",
  },
  {
    name: "Mua & Nhập hàng",
    href: "/c",
  },
  {
    name: "Kho & Sản xuất",
    href: "/d",
  },
  {
    name: "Kế toán",
    href: "/e",
  },
  {
    name: "Báo cáo & Thống kê",
    href: "/f",
  },
  {
    name: "Tiện ích",
    href: "/g",
  },
];

export const header_icons: HeaderIconProps[] = [
  {
    name: "Cài đặt",
    icon: Settings,
  },
  {
    name: "Liên kết",
    icon: GitCompareArrows,
  },
  {
    name: "Nhắn tin",
    icon: MessageSquareText,
  },
  {
    name: "Thông báo",
    icon: Bell,
  },
  {
    name: "Hỗ trợ",
    icon: CircleHelp,
  },
];

export const day_list: SelectProps[] = [{ name: "Hôm nay", value: "1" }];
export const week_list: SelectProps[] = [{ name: "Tuần này", value: "1" }];
export const month_list: SelectProps[] = [{ name: "Tháng này", value: "1" }];
export const quarter_list: SelectProps[] = [{ name: "Quý này", value: "1" }];
export const year_list: SelectProps[] = [{ name: "Năm này", value: "1" }];
export const status_list: SelectProps[] = [{ name: "Hoàn thành", value: "1" }];

export const top_product_list: TopProductProps[] = [
  {
    product: "Áo sơ mi dài tay",
    buy: 48,
    percent: 8.2,
  },
  {
    product: "Quần tây",
    buy: 18,
    percent: -5,
  },
  {
    product: "Áo hoodie",
    buy: 40,
    percent: 12,
  },
  {
    product: "Đầm maxi",
    buy: 23,
    percent: 3.5,
  },
  {
    product: "Áo thun cổ tròn",
    buy: 48,
    percent: 4.7,
  },
];

export const productionData: ProductionDataProps[] = [
  { name: "Áo ba lỗ", plan: 60, actual: 40 },
  { name: "Áo sơ mi", plan: 100, actual: 60 },
  { name: "Áo thun polo", plan: 80, actual: 20 },
  { name: "Quần baggy", plan: 70, actual: 50 },
  { name: "Quần jogger", plan: 90, actual: 60 },
];

export const topCustomersData: TopCustomerProps[] = [
  { name: "Công ty Dệt may Happy Polla", quantity: 3000 },
  { name: "Công ty May mặc Saigon trendy", quantity: 2800 },
  { name: "Outlet Lemon squeeze", quantity: 2900 },
  { name: "Shop quần áo streetwear New...", quantity: 2600 },
  { name: "Shop thời trang công sở Basic Office", quantity: 2700 },
];

export const productionStatus: ProductionStatusProps[] = [
  { name: "Chưa hoàn thành", value: 5, fill: "#FF8F0D" },
  { name: "Đang sản xuất", value: 6, fill: "#0375F3" },
  { name: "Hoàn thành", value: 5, fill: "#1FC583" },
];

export const productionUnStatus: ProductionStatusProps[] = [
  { name: "Chưa hoàn thành", value: 1, fill: "#D0D5DD" },
  { name: "Đang sản xuất", value: 1, fill: "#C6CBD1" },
  { name: "Hoàn thành", value: 1, fill: "#DADFE4" },
];

export const progressData: ProgressDataProps[] = [
  { name: "Áo sơ mi dài tay", value: 123, percent: 50 },
  { name: "Áo sơ mi cụt tay", value: 321, percent: 75 },
  { name: "Quần baggy", value: 231, percent: 45 },
  { name: "Quần tây", value: 999, percent: 60 },
  { name: "Đầm maxi", value: 876, percent: 90 },
  { name: "Áo hoodie", value: 765, percent: 15 },
  { name: "Áo khoác bomber", value: 543, percent: 24 },
];

export const materialData: MaterialDataProps[] = [
  { name: "Chỉ cotton", unit: "Cuộn", quantity: 8 },
  { name: "Vải lụa", unit: "Mét", quantity: 8 },
  { name: "Vải lót", unit: "Mét", quantity: 8 },
  { name: "Vải chống thấm", unit: "Mét", quantity: 8 },
  { name: "Vải nỉ", unit: "Mét", quantity: 8 },
];

import { LucideIcon } from "lucide-react";

export interface HeaderItemProps {
  name: string;
  href: string;
}

export interface HeaderIconProps {
  name: string;
  icon: LucideIcon;
}

export interface SelectProps {
  name: string;
  value: string;
}

export interface SectionProps {
  title: string;
  list: SelectProps[];
  children: React.ReactNode;
  icon?: boolean;
}

export interface TopProductProps {
  product: string;
  buy: number;
  percent: number;
}

export interface ProductionDataProps {
  name: string;
  plan: number;
  actual: number;
}

export interface TopCustomerProps {
  name: string;
  quantity: number;
}

export interface ProductionStatusProps {
  name: string;
  value: number;
  fill: string;
}

export interface ProgressDataProps {
  name: string;
  value: number;
  percent: number;
}

export interface MaterialDataProps {
  name: string;
  unit: string;
  quantity: number;
}

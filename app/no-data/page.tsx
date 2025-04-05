"use client";

import Section from "@/components/layout/section";
import TopProduct from "@/components/layout/top-product";
import { ManufacturePlan } from "@/components/manufacture-plan";
import ManufactureProcess from "@/components/manufacture-process";
import { ManufactureSituation } from "@/components/manufacture-situation";
import NeededResource from "@/components/needed-resource";
import { TopCustomer } from "@/components/top-customer";
import {
  day_list,
  quarter_list,
  status_list,
  week_list,
  year_list,
} from "@/constants";

export default function NoDataPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <TopProduct list={[]} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Section title="Kế hoạch sản xuất" list={quarter_list} icon>
          <ManufacturePlan list={[]} />
        </Section>
        <Section
          title="Top 5 khách hàng có sản lượng nhiều nhất"
          list={year_list}
          icon
        >
          <TopCustomer list={[]} />
        </Section>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Section title="Tình hình sản xuất" list={day_list} icon>
          <ManufactureSituation list={[]} />
        </Section>
        <Section title="Tiến độ sản xuất theo nhóm" list={status_list}>
          <ManufactureProcess list={[]} />
        </Section>
        <Section title="Nguyên vật liệu cần mua" list={week_list} icon>
          <NeededResource list={[]} />
        </Section>
      </div>
    </div>
  );
}

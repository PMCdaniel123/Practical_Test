import { SectionProps } from "@/types";
import Select from "../select/select";

function Section({ title, list, children, icon }: SectionProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl flex flex-col pb-4">
      <div className="p-4 xl:p-6 flex items-center justify-between">
        <p className="font-medium text-sm xl:text-lg capitalize text-title">
          {title}
        </p>
        <Select list={list} icon={icon} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Section;

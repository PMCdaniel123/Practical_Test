"use client";

import { SelectProps } from "@/types";
import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

function Select({ list, icon }: { list: SelectProps[]; icon?: boolean }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedName, setSelectedName] = useState(list[0].name);

  return (
    <div
      className="border px-2 xl:px-3 py-2 rounded-lg gap-2 flex items-center relative cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {icon && <Calendar className="text-neutral-02 w-3 h-3 xl:w-4 xl:h-4" />}
      <p className="text-xs xl:text-base font-normal text-neutral-01">
        {selectedName}
      </p>
      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
      {showDropdown && (
        <div className="absolute right-0 top-10 xl:top-12 min-w-[100px] xl:min-w-[200px] bg-white border shadow-md rounded-md p-2">
          {list.map((item) => (
            <div
              className="px-2 py-1 cursor-pointer hover:bg-gray-100 xl:text-base text-sm"
              key={item.name}
              onClick={() => {
                setSelectedName(item.name);
                setShowDropdown(false);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;

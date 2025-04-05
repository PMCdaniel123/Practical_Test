"use client";

import { SelectProps } from "@/types";
import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

function Select({ list, icon }: { list: SelectProps[]; icon?: boolean }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedName, setSelectedName] = useState(list[0].name);

  return (
    <div
      className="border px-3 py-2 rounded-lg gap-2 flex items-center relative cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {icon && <Calendar size={16} className="text-neutral-02" />}
      <p className="text-base font-normal text-neutral-01">{selectedName}</p>
      <ChevronDown size={16} />
      {showDropdown && (
        <div className="absolute right-0 top-12 min-w-[200px] bg-white border shadow-md rounded-md p-2">
          {list.map((item) => (
            <div
              className="px-2 py-1 cursor-pointer hover:bg-gray-100"
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

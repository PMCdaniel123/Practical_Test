import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center rounded-md bg-white/20 gap-1 py-1 px-1.5">
      <Search size={16} className="text-white/80" />
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="focus:outline-none text-xs bg-transparent h-full text-white/65"
      />
    </div>
  );
}

export default SearchBar;

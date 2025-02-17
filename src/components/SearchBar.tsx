
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12 animate-fade-in">
      <div className="relative">
        <input
          type="text"
          placeholder="Search resources..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
};

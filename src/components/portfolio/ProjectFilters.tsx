import { Search } from 'lucide-react';

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'construction', label: 'Construction' },
  { id: 'renovation', label: 'Rénovation' },
  { id: 'maconnerie', label: 'Maçonnerie' },
];

export function ProjectFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher un projet..."
          className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex space-x-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              selectedCategory === category.id
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
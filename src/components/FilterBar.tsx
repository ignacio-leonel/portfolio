import React from 'react';
import { categories } from '../data/projects';

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg shadow-cyan-500/25'
              : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
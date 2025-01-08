import { useState } from 'react';

interface AdminNavProps {
  onTabChange: (tab: 'reviews' | 'projects') => void;
  activeTab: 'reviews' | 'projects';
}

export function AdminNav({ onTabChange, activeTab }: AdminNavProps) {
  return (
    <nav className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => onTabChange('projects')}
          className={`
            px-6 py-3 text-base sm:text-lg font-sans font-medium
            rounded-lg transition-all duration-200
            bg-[#FF0000] text-white
            hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500
            min-w-[200px] sm:min-w-[250px]
            ${activeTab === 'projects' ? 'border-2 border-black' : ''}
          `}
        >
          Gérer les réalisations
        </button>
        <button
          onClick={() => onTabChange('reviews')}
          className={`
            px-6 py-3 text-base sm:text-lg font-sans font-medium
            rounded-lg transition-all duration-200
            bg-[#FF0000] text-white
            hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500
            min-w-[200px] sm:min-w-[250px]
            ${activeTab === 'reviews' ? 'border-2 border-black' : ''}
          `}
        >
          Gérer les avis
        </button>
      </div>
    </nav>
  );
}
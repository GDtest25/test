import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { useEffect, useState } from 'react';
import type { Project } from '../types';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Les projets seront chargés depuis la base de données
  }, []);

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Réalisations
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez nos projets récents en maçonnerie et béton armé.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
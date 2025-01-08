import { useState } from 'react';
import { ProjectForm } from './ProjectForm';
import type { Project } from '../../../types';

interface ProjectListProps {
  projects: Project[];
  onDelete: (id: string) => Promise<void>;
  onUpdate: (id: string, data: FormData) => Promise<void>;
}

export function ProjectList({ projects, onDelete, onUpdate }: ProjectListProps) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-sm p-6 space-y-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 text-sm">
                {new Date(project.date).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setEditingProject(project)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Modifier
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Supprimer
              </button>
            </div>
          </div>

          <p className="text-gray-700">{project.description}</p>

          <div className="grid grid-cols-3 gap-4">
            {project.imageUrls?.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}

      {editingProject && (
        <ProjectForm
          project={editingProject}
          onSubmit={(data) => onUpdate(editingProject.id, data)}
          onClose={() => setEditingProject(null)}
        />
      )}
    </div>
  );
}
import type { Project } from '../../types';

interface ProjectListProps {
  projects: Project[];
  onDelete: (id: string) => Promise<void>;
}

export function ProjectList({ projects, onDelete }: ProjectListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow rounded-lg p-6 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-gray-500">{project.description}</p>
            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
              {project.category}
            </span>
          </div>
          <button
            onClick={() => onDelete(project.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
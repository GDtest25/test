import { useState } from 'react';
import { ProjectForm } from './ProjectForm';
import { ProjectList } from './ProjectList';
import { useProjects } from '../../../hooks/useProjects';

export function ProjectManagement() {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gérer les réalisations</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
        >
          Ajouter une réalisation
        </button>
      </div>

      <ProjectList
        projects={projects}
        onDelete={deleteProject}
        onUpdate={updateProject}
      />

      {showAddForm && (
        <ProjectForm
          onSubmit={addProject}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}
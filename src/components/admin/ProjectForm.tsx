import { useState } from 'react';
import type { Project } from '../../types';

interface ProjectFormProps {
  onSubmit: (project: Omit<Project, 'id'>, images: File[]) => Promise<void>;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(
      {
        title,
        description,
        category,
        date: new Date().toISOString(),
      },
      images
    );
    setTitle('');
    setDescription('');
    setCategory('');
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Titre
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Catégorie
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        >
          <option value="">Sélectionner une catégorie</option>
          <option value="construction">Construction</option>
          <option value="renovation">Rénovation</option>
          <option value="maconnerie">Maçonnerie</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Photos</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files || []))}
          className="mt-1 block w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
      >
        Ajouter le projet
      </button>
    </form>
  );
}
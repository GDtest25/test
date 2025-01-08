import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={project.imageUrl}
          alt={project.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-1.5 h-4 w-4" />
            <time dateTime={project.date}>
              {new Date(project.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long'
              })}
            </time>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {project.description}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
            {project.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
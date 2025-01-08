import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function ServiceCard({ title, description, imageUrl, link }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <div className="aspect-h-9 aspect-w-16 relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-base text-gray-500">{description}</p>
        <Link
          to={link}
          className="mt-4 inline-flex items-center text-red-600 hover:text-red-500"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
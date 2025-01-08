import { Building2, Hammer, Construction, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Maçonnerie',
    icon: Building2,
    description: 'Travaux de maçonnerie traditionnelle et moderne',
  },
  {
    title: 'Rénovation',
    icon: Hammer,
    description: 'Rénovation complète de bâtiments',
  },
  {
    title: 'Gros œuvre',
    icon: Construction,
    description: 'Fondations, structures et travaux de gros œuvre',
  },
  {
    title: 'Autres travaux',
    icon: Wrench,
    description: 'Aménagements et travaux divers',
  },
];

export function ServiceSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une expertise complète en maçonnerie et gros œuvre
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm ring-1 ring-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-red-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
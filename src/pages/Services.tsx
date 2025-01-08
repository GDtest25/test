import { ServiceCard } from '../components/services/ServiceCard';

const services = [
  {
    title: 'Maçonnerie Générale',
    description: 'Construction de murs, fondations, et structures en maçonnerie traditionnelle.',
    imageUrl: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/services/maconnerie',
  },
  {
    title: 'Béton Armé',
    description: 'Réalisation de structures en béton armé pour une solidité maximale.',
    imageUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/services/beton-arme',
  },
  {
    title: 'Rénovation',
    description: 'Travaux de rénovation et de restauration pour tous types de bâtiments.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/services/renovation',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez notre gamme complète de services en maçonnerie et béton armé.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
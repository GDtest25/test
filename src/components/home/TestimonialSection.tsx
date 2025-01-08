import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function TestimonialSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Avis Clients
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {/* Les avis seront chargés dynamiquement depuis la base de données */}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
          >
            Voir tous les avis
          </Link>
        </div>
      </div>
    </div>
  );
}
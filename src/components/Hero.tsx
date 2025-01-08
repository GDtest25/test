import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative isolate h-screen">
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 h-full flex items-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Maçonnerie Béton Armé
              <br />
              <span className="text-red-600">Expertise & Qualité</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Spécialiste en maçonnerie et béton armé à Sury. Notre expertise garantit des constructions durables et de qualité pour tous vos projets.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/about"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors flex items-center"
              >
                À propos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-red-500 transition-colors"
              >
                Contactez-nous <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
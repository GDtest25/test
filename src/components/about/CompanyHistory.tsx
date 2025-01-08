import { motion } from 'framer-motion';

export function CompanyHistory() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre Histoire</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Depuis notre création, GD.MBA s'est imposé comme un leader de la maçonnerie et du béton armé dans la région de Sury. 
            Notre engagement envers l'excellence et la qualité nous a permis de bâtir une réputation solide auprès de nos clients.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                  <span className="text-white">1</span>
                </div>
                Expertise
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Plus de 15 ans d'expérience dans le domaine de la construction.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                  <span className="text-white">2</span>
                </div>
                Qualité
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Des matériaux premium et un savoir-faire reconnu.
              </dd>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { MapPin } from 'lucide-react';

export function ServiceArea() {
  const areas = [
    'Sury',
    'Saint-Étienne',
    'Montbrison',
    'Andrézieux-Bouthéon',
    'Saint-Just-Saint-Rambert',
    'Veauche'
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Zone d'Intervention
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous intervenons dans toute la région de Sury et ses environs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area} className="flex flex-col items-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <MapPin className="h-5 w-5 flex-none text-red-600" />
                  {area}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
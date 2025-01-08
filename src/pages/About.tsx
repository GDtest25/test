import { CompanyHistory } from '../components/about/CompanyHistory';
import { MapContainer } from '../components/about/MapContainer';
import '../styles/map.css';

export default function About() {
  return (
    <div className="pt-20">
      <CompanyHistory />
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre Localisation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              75 Allée de Bellevue, 42450 Sury-le-Comtal
            </p>
          </div>
          <MapContainer />
        </div>
      </div>
    </div>
  );
}
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contactez-nous</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-red-600" />
            <h3 className="mt-4 font-semibold text-white">Téléphone</h3>
            <a href="tel:0627088824" className="mt-2 text-red-600 hover:text-red-500">
              06.27.08.88.24
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="h-8 w-8 text-red-600" />
            <h3 className="mt-4 font-semibold text-white">Email</h3>
            <a href="mailto:societe.gd.mba@gmail.com" className="mt-2 text-red-600 hover:text-red-500">
              societe.gd.mba@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <MapPin className="h-8 w-8 text-red-600" />
            <h3 className="mt-4 font-semibold text-white">Adresse</h3>
            <p className="mt-2 text-gray-300">Sury, France</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ContactForm } from '../components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    content: '06.27.08.88.24',
    href: 'tel:0627088824',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'societe.gd.mba@gmail.com',
    href: 'mailto:societe.gd.mba@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Sury, France',
    href: 'https://maps.google.com/?q=Sury,France',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun-Ven: 8h-18h',
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contactez-nous
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <dl className="mt-10 space-y-4">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{item.title}</span>
                    <item.icon className="h-7 w-6 text-red-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base text-red-600 hover:text-red-500"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-base text-gray-700">{item.content}</p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-white rounded-2xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
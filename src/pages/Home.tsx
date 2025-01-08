import { Hero } from '../components/Hero';
import { SimpleServiceList } from '../components/home/SimpleServiceList';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { ContactSection } from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <SimpleServiceList />
      <FeaturedProjects />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
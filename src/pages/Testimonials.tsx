import { useState, useEffect } from 'react';
import { ReviewForm } from '../components/reviews/ReviewForm';
import { ReviewList } from '../components/reviews/ReviewList';
import { reviewService } from '../services/reviewService';
import type { Review } from '../types/review';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await reviewService.getPublicReviews();
      setReviews(data);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Témoignages Clients
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez les avis de nos clients et partagez votre expérience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-6">Laissez votre avis</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ReviewForm />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Avis de nos clients</h3>
            {loading ? (
              <div>Chargement des avis...</div>
            ) : (
              <ReviewList reviews={reviews} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
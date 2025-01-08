import { Star, CheckCircle } from 'lucide-react';
import type { Review } from '../../types/review';

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            {review.isVerified && (
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-1" />
                <span className="text-sm">Avis vérifié</span>
              </div>
            )}
            {review.status === 'pending' && (
              <div className="text-sm text-amber-600">En attente de vérification</div>
            )}
          </div>
          <p className="text-gray-600 mb-4">{review.content}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-900">{review.author}</span>
            <span className="text-gray-500">
              {new Date(review.date).toLocaleDateString('fr-FR')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
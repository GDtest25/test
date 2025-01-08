import { CheckCircle, AlertCircle } from 'lucide-react';
import type { Review } from '../../../types/review';

interface ReviewItemProps {
  review: Review;
  onVerify: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onRespond: () => void;
}

export function ReviewItem({ review, onVerify, onDelete, onRespond }: ReviewItemProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900">{review.author}</span>
          {review.isVerified ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircle className="w-4 h-4 mr-1" />
              Vérifié
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <AlertCircle className="w-4 h-4 mr-1" />
              Non vérifié
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500">
          {formatDate(review.date)}
        </span>
      </div>

      <p className="text-gray-700 mb-4">{review.content}</p>

      <div className="flex justify-end space-x-2">
        {!review.isVerified && (
          <button
            onClick={() => onVerify(review.id)}
            className="px-4 py-2 bg-[#dc3545] text-white rounded hover:bg-red-600 transition-colors"
          >
            Vérifier
          </button>
        )}
        {review.isVerified && (
          <button
            onClick={onRespond}
            className="px-4 py-2 bg-[#dc3545] text-white rounded hover:bg-red-600 transition-colors"
          >
            Répondre
          </button>
        )}
        <button
          onClick={() => onDelete(review.id)}
          className="px-4 py-2 bg-[#dc3545] text-white rounded hover:bg-red-600 transition-colors"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
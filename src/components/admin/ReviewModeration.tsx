import { useState, useEffect } from 'react';
import { Check, X, Trash2, AlertCircle } from 'lucide-react';
import { reviewService } from '../../services/reviewService';
import type { Review } from '../../types/review';

export function ReviewModeration() {
  const [pendingReviews, setPendingReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPendingReviews();
  }, []);

  const loadPendingReviews = async () => {
    try {
      const reviews = await reviewService.getPendingReviews();
      setPendingReviews(reviews);
    } catch (error) {
      console.error('Error loading pending reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await reviewService.approveReview(id);
      await loadPendingReviews();
    } catch (error) {
      console.error('Error approving review:', error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await reviewService.rejectReview(id);
      await loadPendingReviews();
    } catch (error) {
      console.error('Error rejecting review:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet avis ?')) {
      try {
        await reviewService.deleteReview(id);
        await loadPendingReviews();
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Avis en attente de modération</h2>
      {pendingReviews.length === 0 ? (
        <div className="text-gray-500">Aucun avis en attente de modération</div>
      ) : (
        <div className="space-y-4">
          {pendingReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">{review.author}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleApprove(review.id)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                    title="Approuver"
                  >
                    <Check className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleReject(review.id)}
                    className="p-2 text-amber-600 hover:bg-amber-50 rounded-full"
                    title="Rejeter"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                    title="Supprimer"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{review.content}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  En attente de modération
                </div>
                <span>
                  {new Date(review.date).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
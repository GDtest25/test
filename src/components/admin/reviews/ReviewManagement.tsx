import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewList } from './ReviewList';
import { reviewService } from '../../../services/reviewService';
import { authService } from '../../../services/authService';
import type { Review } from '../../../types/review';

export function ReviewManagement() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/admin');
      return;
    }
    loadReviews();
  }, [navigate]);

  const loadReviews = async () => {
    try {
      setError(null);
      const data = await reviewService.getAllReviews();
      setReviews(data.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ));
    } catch (error) {
      console.error('Error loading reviews:', error);
      setError('Erreur lors du chargement des avis. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (id: string) => {
    try {
      await reviewService.verifyReview(id);
      await loadReviews();
    } catch (error) {
      console.error('Error verifying review:', error);
      setError('Erreur lors de la vérification de l\'avis.');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await reviewService.deleteReview(id);
      await loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      setError('Erreur lors de la suppression de l\'avis.');
    }
  };

  const handleRespond = async (id: string, response: string) => {
    try {
      await reviewService.respondToReview(id, response);
      await loadReviews();
    } catch (error) {
      console.error('Error responding to review:', error);
      setError('Erreur lors de l\'envoi de la réponse.');
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Gérer les avis</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <ReviewList
        reviews={reviews}
        onVerify={handleVerify}
        onDelete={handleDelete}
        onRespond={handleRespond}
      />
    </div>
  );
}
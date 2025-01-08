import { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import type { Review } from '../../types';

export function ReviewManagement() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'reviews'));
      const reviewsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyReview = async (reviewId: string) => {
    try {
      await updateDoc(doc(db, 'reviews', reviewId), {
        isVerified: true
      });
      loadReviews();
    } catch (error) {
      console.error('Error verifying review:', error);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
      loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white shadow rounded-lg p-6 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-medium">{review.author}</h3>
            <p className="text-gray-500">{review.content}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-2">
            {!review.isVerified && (
              <button
                onClick={() => handleVerifyReview(review.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Approuver
              </button>
            )}
            <button
              onClick={() => handleDeleteReview(review.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
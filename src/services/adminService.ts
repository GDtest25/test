import { collection, getDocs, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Review } from '../types/review';

export const adminService = {
  async getPendingReviews(): Promise<Review[]> {
    try {
      const q = query(
        collection(db, 'reviews'),
        where('status', '==', 'pending')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
    } catch (error) {
      console.error('Error loading pending reviews:', error);
      throw error;
    }
  },

  async approveReview(reviewId: string): Promise<void> {
    try {
      const reviewRef = doc(db, 'reviews', reviewId);
      await updateDoc(reviewRef, {
        status: 'approved',
        isVerified: true
      });
    } catch (error) {
      console.error('Error approving review:', error);
      throw error;
    }
  },

  async deleteReview(reviewId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  }
};
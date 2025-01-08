import { useState } from 'react';
import { ReviewItem } from './ReviewItem';
import { ReviewResponse } from './ReviewResponse';
import type { Review } from '../../../types/review';

interface ReviewListProps {
  reviews: Review[];
  onVerify: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onRespond: (id: string, response: string) => Promise<void>;
}

export function ReviewList({ reviews, onVerify, onDelete, onRespond }: ReviewListProps) {
  const [respondingTo, setRespondingTo] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet avis ?')) {
      await onDelete(id);
    }
  };

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="space-y-4">
          <ReviewItem
            review={review}
            onVerify={onVerify}
            onDelete={handleDelete}
            onRespond={() => setRespondingTo(review.id)}
          />
          {respondingTo === review.id && (
            <ReviewResponse
              onSubmit={async (response) => {
                await onRespond(review.id, response);
                setRespondingTo(null);
              }}
              onCancel={() => setRespondingTo(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
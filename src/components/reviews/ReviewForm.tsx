import { useState } from 'react';
import { Star } from 'lucide-react';
import { reviewService } from '../../services/reviewService';
import type { ReviewFormData } from '../../types/review';

export function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    author: '',
    content: '',
    rating: 5
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await reviewService.submitReview(formData);
      setStatus('success');
      setFormData({ author: '', content: '', rating: 5 });
    } catch (error) {
      console.error('Error submitting review:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Note</label>
        <div className="mt-1 flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFormData({ ...formData, rating: value })}
              className={`p-1 ${value <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              <Star className="h-6 w-6 fill-current" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Votre nom
        </label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Votre avis
        </label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>

      {status === 'success' && (
        <div className="text-green-600">Votre avis a été soumis avec succès !</div>
      )}
      {status === 'error' && (
        <div className="text-red-600">Une erreur est survenue. Veuillez réessayer.</div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Envoi...' : 'Envoyer mon avis'}
      </button>
    </form>
  );
}
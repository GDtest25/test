import { useState } from 'react';
import { Star } from 'lucide-react';

export function TestimonialForm() {
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit testimonial logic will be implemented with backend
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
              onClick={() => setRating(value)}
              className={`p-1 ${value <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              <Star className="h-6 w-6 fill-current" />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Votre avis
        </label>
        <textarea
          id="content"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Votre nom
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Envoyer
      </button>
    </form>
  );
}
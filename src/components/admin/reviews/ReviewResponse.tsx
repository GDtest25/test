import { useState } from 'react';

interface ReviewResponseProps {
  onSubmit: (response: string) => Promise<void>;
  onCancel: () => void;
}

export function ReviewResponse({ onSubmit, onCancel }: ReviewResponseProps) {
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      await onSubmit(`${response}\n\n- GD.MBA`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg">
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Votre réponse..."
        className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
        rows={4}
        required
      />
      <div className="mt-2 flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#dc3545] text-white rounded hover:bg-red-600 transition-colors"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
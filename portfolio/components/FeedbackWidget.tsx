'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface FeedbackWidgetProps {
  onSubmit: () => void;
}

export default function FeedbackWidget({ onSubmit }: FeedbackWidgetProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({ rating, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        onSubmit();
      } else {
        setError('Une erreur est survenue. Réessayez.');
      }
    } catch (err) {
      setError('Erreur réseau. Vérifiez votre connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md px-8 py-6 text-black space-y-4 z-[10000]">
      <h3 className="text-xl font-semibold text-center">Votre avis</h3>

      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={30}
            className={`cursor-pointer transition-colors ${
              (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-400'
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>

      <textarea
        className="w-full p-3 border border-gray-300 rounded-xl resize-none text-sm"
        placeholder="Do you want to give details ? (optionnel)"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="text-center">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-600 transition disabled:opacity-50"
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
    </div>
  );
}

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
      const res = await fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({ rating, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        onSubmit();
      } else {
        setError('Something went wrong. Try again.');
      }
    } catch (err) {
      setError('Network Error. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md px-8 py-6 text-black space-y-4 z-[10000]">
      <h3 className="text-xl font-semibold text-center">Give me a feedback</h3>

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
        placeholder="It is important for me to improve this platform so don't hesitate to give me details about your impression (optional)."
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {error && <div className={`rounded-lg shadow-lg z-[9999] text-center justify-center transition-all duration-300 ease-out transform bg-red-200 border-2 border-red-800'}`}>
            <div className="flex items-center justify-between gap-4">
              <span className="px-5 py-2 text-[18px] text-center flex w-full items-center justify-center text-black">{error}</span>
            </div>
            </div>
      }

      <div className="text-center">
        <button
          className="bg-page-grey text-white py-2 px-6 rounded-xl hover:bg-pink-400 transition disabled:opacity-50 text-lg"
          onClick={handleSend}
          disabled={loading || rating === 0}
        >
          {loading ? 'Sending...' : 'Done !'}
        </button>
      </div>
    </div>
  );
}

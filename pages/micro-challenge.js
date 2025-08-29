import { useState } from 'react';

export default function MicroChallenge() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Micro-Challenge Engine</h1>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="px-4 py-2 bg-green-600 rounded shadow">
          Submit GitHub Repo (mock)
        </button>
      ) : (
        <p className="mt-4">✅ Repo submitted! Auto-score: 85%</p>
      )}
    </div>
  );
}
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      <h1 className="text-5xl font-bold mb-6">🚀 KaleidoPath Prototype</h1>
      <p className="mb-8 text-lg">Your Personalized AI Career & Skills Advisor</p>
      <div className="space-x-4">
        <Link href="/skill-genome" className="px-4 py-2 bg-purple-500 rounded-lg shadow">Skill Genome</Link>
        <Link href="/micro-challenge" className="px-4 py-2 bg-green-500 rounded-lg shadow">Micro-Challenge</Link>
        <Link href="/skill-constellations" className="px-4 py-2 bg-blue-500 rounded-lg shadow">Skill Constellations</Link>
      </div>
    </main>
  );
}
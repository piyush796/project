import { useState } from 'react';

export default function SkillGenome() {
  const [skills, setSkills] = useState({ js: 3, python: 2, react: 4 });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Skill Genome Bootstrap</h1>
      <p>Rate your skills (mockup)</p>
      <ul className="mt-4 space-y-2">
        {Object.entries(skills).map(([skill, level]) => (
          <li key={skill} className="flex justify-between bg-gray-800 p-2 rounded">
            <span>{skill.toUpperCase()}</span>
            <span>{'⭐'.repeat(level)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
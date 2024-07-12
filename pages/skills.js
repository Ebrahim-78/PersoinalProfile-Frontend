import { useEffect, useState } from 'react';

const fetchSkills = async () => {
  try {
    const response = await fetch('http://localhost:4000/skills');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return [];
  }
};

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills().then(data => setSkills(data));
  }, []);

  return (
    <div id='skills' className="min-h-screen bg-slate-600  py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.length > 0 ? (
            skills.map(skill => (
              <div key={skill.id} className=" bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-green-500">{skill.name}</h2>
                  <p className="text-white mb-4">{skill.description}</p>
                  <p className="text-green-500 font-semibold">Level: {skill.level}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No skills available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

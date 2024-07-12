

import { useEffect, useState } from 'react';
const fetchProjects = async () => {
  try {
    const response = await fetch('http://localhost:3000/projects');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  return (
    <div id='projects' className="min-h-screen bg-slate-300-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map(project => (
              <div key={project.id} className=" bg-slate-600 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-green-400 text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-white mb-4">{project.description}</p>
                  <a href={project.url} className="text-green-400 hover:text-blue-700">
                    View Project
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white-500">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

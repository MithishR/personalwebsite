import React, { useState } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [expandedProjectIds, setExpandedProjectIds] = useState([]);

  const handleProjectClick = (projectId) => {
    setExpandedProjectIds((prevIds) =>
      prevIds.includes(projectId)
        ? prevIds.filter((id) => id !== projectId) 
        : [...prevIds, projectId] 
    );
  };

  return (
    <div
      name="project"
      id="project"
      className="min-h-screen w-full bg-[#000000] flex items-center justify-center pt-0 pb-"
    >
      <div className="max-w-screen-lg mx-auto w-full px-4 text-center" >
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-12">
          Personal <span className="text-yellow-custom">Projects</span>
        </h2>
        <h3 className="text-2xl font-semibold text-white mb-8">
          Click on a project to see more details!
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 overflow-hidden`}
              style={{
                maxHeight: expandedProjectIds.includes(project.id) ? '800px' : '390px', 
                
                flex: 1,
              }}
            >
              <img
                src={project.picture}
                alt={project.name}
                className="object-cover w-full h-48 rounded-lg mb-4"
              />
              <h3
                className="text-2xl font-bold text-yellow-custom mb-2 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                {project.name}
              </h3>
              <p className="text-lg text-gray-300 mb-2">
                <strong>Tech Stack:</strong> {project.stack}
              </p>
              {expandedProjectIds.includes(project.id) && (
                <div
                  className="text-gray-200 mb-4"
                  dangerouslySetInnerHTML={{ __html: project.desc }}
                />
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-custom hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

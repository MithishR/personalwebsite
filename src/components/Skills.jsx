import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillCategories } from '../data/skillCategories'; // Import from data folder



const Skills = () => {
  return (
    <div
      name="skills"
      id="skills"
      className="h-screen w-full bg-[#000000] flex items-center justify-center pt-16 pb-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full px-8 py-16">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-8">
          My <span className="text-yellow-custom">Skills</span>
        </h2>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12 text-center" >
            <h3 className="text-3xl font-semibold text-white mb-8 justify-center" >{ category}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map(skill => (
                <div key={skill.name} className="relative group">
                  {skill.icon && typeof skill.icon === 'string' ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 sm:w-24 sm:h-24 transition-transform duration-300 ease-in-out transform group-hover:scale-110 filter invert"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="w-16 h-16 sm:w-24 sm:h-24 transition-transform duration-300 ease-in-out transform group-hover:scale-110 text-white"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg bg-black p-2 rounded">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

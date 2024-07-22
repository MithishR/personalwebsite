import React, { useState } from 'react';
import { projects } from '../data/projects'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillCategories } from '../data/skillCategories'; 


const Projects = () => {

  return (
    <div
      name="project"
      id="project"
      className="h-screen w-full bg-[#000000] flex items-center justify-center pt-16 pb-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full px-1 py-16">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-8">
          Personal <span className="text-yellow-custom">Projects</span>
        </h2>
        <h3 className="text-xl font-semibold text-white mb-8">
          Text!
        </h3>
    


           
      </div>
    </div>
  );
};

export default Projects;

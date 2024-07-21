import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJava,
    faPython,
    faJs,
    faHtml5,
    faCss3Alt,
    faReact,
    faNodeJs,
    faGit,
    faDocker,
    faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import R from '../assets/R.png';
import blueprism from '../assets/blueprism.png';
import django from '../assets/django.png';
import firebase from '../assets/firebase.png';
import gcloud from '../assets/gcloud.png';
import jupyter from '../assets/jupyter.png';
import kotlin from '../assets/kotlin.png';
import next from '../assets/next.png';
import numpy from '../assets/numpy.png';
import pandas from '../assets/pandas.png';
import powerautomate from '../assets/powerautomate.png';
import seaborn from '../assets/seaborn.png';
import studio from '../assets/studio.png';
import tableau from '../assets/tableau.png';
import tailwind from '../assets/tailwind.png';
import tensorflow from '../assets/tensorflow.png';
import uipath from '../assets/uipath.png';

const skillCategories = {
  "Programming Languages": [
    { name: "Java", icon: faJava },
    { name: "Python", icon: faPython },
    { name: "JavaScript", icon: faJs },
    { name: "SQL", icon: faDatabase },
    { name: "Kotlin", icon: kotlin }
  ],
  "Web Development": [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Tailwind CSS", icon: tailwind }
  ],
  "Frameworks and Libraries": [
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "Django", icon: django },
    { name: "Next", icon: next },
    { name: "NumPy", icon: numpy },
    { name: "Pandas", icon: pandas },
    { name: "Seaborn", icon: seaborn },
    { name: "Jupyter", icon: jupyter }
  ],
  "Data Analytics": [
    { name: "Tableau", icon: tableau },
    { name: "R", icon: R },
    { name: "TensorFlow", icon: tensorflow }
  ],
  "Developer Tools": [
    { name: "Git", icon: faGit },
    { name: "Docker", icon: faDocker },
    { name: "Google Cloud", icon: gcloud },
    { name: "Firebase", icon: firebase },
    { name: "Android Studio", icon: studio }
  ],
  "RPA Technologies": [
    { name: "Blue Prism", icon: blueprism },
    { name: "UiPath", icon: uipath },
    { name: "Microsoft Power Automate", icon: powerautomate }
  ]
};

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

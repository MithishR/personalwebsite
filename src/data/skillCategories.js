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
  import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";
  import R from '../assets/icons/R.png';
  import blueprism from '../assets/icons/blueprism.png';
  import django from '../assets/icons/django.png';
  import firebase from '../assets/icons/firebase.png';
  import gcloud from '../assets/icons/gcloud.png';
  import jupyter from '../assets/icons/jupyter.png';
  import kotlin from '../assets/icons/kotlin.png';
  import next from '../assets/icons/next.png';
  import numpy from '../assets/icons/numpy.png';
  import pandas from '../assets/icons/pandas.png';
  import powerautomate from '../assets/icons/powerautomate.png';
  import seaborn from '../assets/icons/seaborn.png';
  import studio from '../assets/icons/studio.png';
  import tableau from '../assets/icons/tableau.png';
  import tailwind from '../assets/icons/tailwind.png';
  import tensorflow from '../assets/icons/tensorflow.png';
  import uipath from '../assets/icons/uipath.png';
  import ubuntu from '../assets/icons/ubuntu.png';
  import jsp from '../assets/icons/jsp.png';
  import c from '../assets/icons/c.png';
  export const skillCategories = {
    "Programming Languages": [
      { name: "Java", icon: faJava },
      { name: "C", icon: c },
      { name: "Python", icon: faPython },
      { name: "JavaScript", icon: faJs },
      { name: "SQL", icon: faDatabase },


    ],
    "Web Development": [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3Alt },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Tailwind CSS", icon: tailwind },

    ],
    "Frameworks and Libraries": [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Django", icon: django },
      { name: "Next.js", icon: next },
      { name: "NumPy", icon: numpy },
      { name: "Pandas", icon: pandas },
      { name: "Seaborn", icon: seaborn },
      { name: "Jupyter", icon: jupyter },
      { name: "JSP", icon: jsp }
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
  
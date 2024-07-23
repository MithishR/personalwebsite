import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <footer className="bg-[#000000] text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <a href="https://github.com/MithishR" target="_blank" rel="noopener noreferrer" className="mr-4 text-2xl hover:text-yellow-custom">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/mithish17" target="_blank" rel="noopener noreferrer" className="mr-4 text-2xl hover:text-yellow-custom">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:mithishrg@gmail.com" className="mr-4 text-2xl hover:text-yellow-custom">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+12345678901" className="text-2xl hover:text-yellow-custom">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </a>
          </div>

          <div className="text-center md:text-right mb-4 md:mb-0">
          <FontAwesomeIcon icon={faCopyright}  /> 
          <span className="text-white text-l"> Mithish, 2024. All Rights Reserved. </span>
          </div>
        </div>

        
        <div className="text-center mt-4">
          <Link onClick={handleClick} to='home' smooth={true} duration={500} className="mx-2 hover:text-yellow-custom">
            Home
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} duration={500} className="mx-2 hover:text-yellow-custom">
            About
          </Link>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className="mx-2 hover:text-yellow-custom">
            Skills
          </Link>
          <Link onClick={handleClick} to='work' smooth={true} duration={500} className="mx-2 hover:text-yellow-custom">
            Work Experience
          </Link>
          <Link onClick={handleClick} to='project' smooth={true} duration={500} className="mx-2 hover:text-yellow-custom">
            Projects
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className="mx-2 hover:text-yellow-custom">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import mithish from '../assets/mithish.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#000000] flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hey There! I'm <span className="text-yellow-custom">Mithish.</span>
          </h2>
          <p className="text-white py-4 max-w-md mx-auto md:mx-0">
        Welcome to my little space on the internet! I am a fourth year Computer Science major with a Data Science minor at 
        <span className="text-yellow-custom"> The University of British Columbia, Okanagan. </span><br /><br />
        I am passionate about  <span className="text-yellow-custom">
            Software Development, Artificial Intelligence, Machine learning, and Aviation! </span> <br /><br />
      
            </p>


          <div className="flex space-x-4">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-white bg-transparent hover:bg-white hover:text-black cursor-pointer"            >
             About me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
           
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-white bg-transparent hover:bg-white hover:text-black cursor-pointer">              
                Resume
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>

            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 md:w-1/2 justify-center">
          <img
            src={mithish}
            alt="my profile"
            className="rounded-2xl w-3/4 md:w-1/2 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import mithishvancouver from '../assets/mithish-vancouver.png';

const About = () => { 
    return (
      <div
        name="about"
        id="about"
        className="h-screen w-full bg-[#000000] flex items-center justify-center"
        style={{ marginBottom: '0', paddingBottom: '0' }}
      >
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center justify-between w-full px-4 py-12">

          <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              About <span className="text-yellow-custom">Me</span>
            </h2>
            <p className="text-white py-4 max-w-md mx-auto md:mx-0">
            I’m a 21-year-old software developer based in Canada. Born in India, grew up in Dubai, and moved to Kelowna, BC at 18 to study at UBC, I bring diverse perspective on solving key problems. 
              I’m currently on an eight-month co-op at <span className="text-yellow-custom"> The Equitable Insurance Company </span> in Waterloo, Ontario, as a 
              <span className="text-yellow-custom"> Robotics Process Automation Developer. </span> <br /><br />
              I’m always on the lookout to learn new things. Currently, I’m learning about  <span className="text-yellow-custom"> TensorFlow </span>for machine learning and sharpening my 
              web development skills. As you can tell, I’m interested in learning about  <span className="text-yellow-custom"> Machine Learning and Artificial Intelligence. </span><br /><br />
              Beyond work and school, I’m a huge  <span className="text-yellow-custom"> aviation enthusiast. </span> I love plane-spotting and can usually tell you what type of aircraft is flying overhead. 
              I also enjoy cafe-hopping, exploring new places, traveling, and reading. <br /><br />
              Feel free to reach out if you want to chat about any of these topics or just connect—I’m always open to meeting new people! 
            </p>
          </div>
=
          <div className="flex-shrink-0 md:w-1/2 justify-center">
            <img
              src={mithishvancouver}
              alt="my profile"
              className="rounded-2xl w-4/5 md:w-4/5 object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default About;

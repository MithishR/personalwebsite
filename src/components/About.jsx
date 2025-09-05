import React from 'react';
import mithishlindau from '../assets/mithish-lindau.png';

const About = () => { 
    return (
        <div
            name="about"
            id="about"
            className="w-full bg-[#000000] flex items-center justify-center"
            style={{ marginBottom: '0', paddingBottom: '0' }}
        >
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center justify-between w-full px-4 py-12 md:py-24">

                <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 mb-12 md:mb-0">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                        About <span className="text-yellow-custom">Me</span>
                    </h2>
                    <p className="text-white py-4 max-w-md mx-auto md:mx-0">
                        Hi! I am Mithish, a software developer based in Kelowna, Canada. 
                        I am a final-year Computer Science student at <span className="text-yellow-custom"> The University of British Columbia </span> with a passion for 
                        building impactful systems that deliver real value to users.<br /><br />

                        My experience ranges from deploying <span className="text-yellow-custom">large-scale financial systems</span> to developing 
                        <span className="text-yellow-custom"> version control solutions </span>for clinical science researchers. 
                        With a strong background in full-stack development, cloud technologies, and machine learning, I strive to be a 
                        <span className="text-yellow-custom"> people-centric </span>software developer who creates technology that empowers and connects users <br /><br />

                        Beyond the classroom, I’ve gained diverse experiences - as a <span className="text-yellow-custom">teaching assistant</span>,  
                        <span className="text-yellow-custom"> course union representative, 
                     co-op software developer at an insurance company, and 
                        conducting research abroad in Germany </span>. 
                        which have strengthened my technical skills, collaboration, and adaptability. <br /><br />

                        Outside of work, I am an <span className="text-yellow-custom">aviation enthusiast, café hopper, and a traveller </span>
                        who loves to explore new places.  <br /><br />

                        I’m currently <span className="text-yellow-custom">seeking opportunities to apply my skills in full-stack and AI-driven applications starting in 
                        Summer 2026</span>. Feel free to connect or reach out-I’m always open to new ideas and conversations!


                    </p>
                </div>

                <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                    <img
                        src={mithishlindau}
                        alt="my profile"
                        className="rounded-2xl w-3/4 md:w-4/5 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

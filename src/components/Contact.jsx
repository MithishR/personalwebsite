import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faLocationDot, faMap, faPhone, faPhoneAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nzirybe', 'template_t3udowi', form.current, {
        publicKey: 'oh34wMI5Ftqu_j5Xd',
      })
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
          setTimeout(() => {
            setStatus('');
          }, 4000);
        },
        (error) => {
          setStatus('Message not sent. Please try again.');
          console.log('FAILED...', error.text);
          setTimeout(() => {
            setStatus('');
          }, 4000);
        },
      );
  };

  return (
    <div
      name="contact"
      id="contact"
      className="min-h-screen w-full bg-[#000000] flex flex-col items-center pt-0 pb-0"
    >
      <div className="text-center mb-12 mt-12">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Contact <span className="text-yellow-custom">Me</span>
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-lg flex flex-col lg:flex-row w-full px-4">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pr-8 mb-12 lg:mb-0">
            <h4 className="text-xl font-semibold text-white mb-4 text-center lg:text-left">
              I'm always excited to hear from you! If you have any questions, or just want to say hi, feel free to contact me via email or through the form! <br></br>
             
            </h4>


            <h5 className="text-lg font-semibold text-white mb-4">Connect with me: Social Media</h5>


            <div className="flex justify-center mt-4 lg:mt-0 mb-5">
              <a href="https://github.com/MithishR" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faGithub} className="text-white text-3xl hover:text-yellow-custom" />
              </a>
              <a href="https://linkedin.com/in/mithish17" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-yellow-custom" />
              </a>

            </div>
            <div className="flex items-center justify-center mt-0">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl hover:text-yellow-custom mr-2" />
                <span className="text-white text-l">mithishrg@gmail.com</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <FontAwesomeIcon icon={faPhoneSquare} className="text-white text-3xl hover:text-yellow-custom mr-2" />
                <span className="text-white text-l">+1 (250) 258-3091</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-white text-3xl hover:text-yellow-custom mr-2" />
                <span className="text-white text-l">Waterloo, Ontario, CAN</span>
            </div>
           
          </div>
          <div className="lg:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="user_name" className="block text-lg font-semibold text-white">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full p-2 mt-2 border rounded"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="user_email" className="block text-lg font-semibold text-white">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full p-2 mt-2 border rounded"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 mt-2 border rounded"
                  placeholder="Your Message"
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="bg-yellow-custom text-white py-2 px-4 rounded">
                Send Message
              </button>

              {status && (
                <p className={`mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

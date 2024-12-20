import React from 'react';

const About = ({ aboutImg }) => {
  return (
    <div className='py-10 text-white bg-[#0000] h-auto' id='about'>
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        
        <div className="w-full sm:w-1/2">
          <img
            src={aboutImg}
            alt="About section illustration"
            className="object-cover rounded-xl h-[500px] "
          />
        </div>
  
        <div className="p-2 sm:w-1/2">
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5 dark:text-white">
              About <span className="primary-text">Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
            I am Fethiya Abdurehim,a passionate Frontend Developer with over 3 years of experience in creating dynamic and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React. I enjoy transforming complex design concepts into user-friendly interfaces while ensuring optimal performance. I am constantly exploring new technologies to enhance my skill set and contribute to innovative projects. Let's work together to bring your ideas to life!
            </p>
          </div>

          <div className="flex mt-10 items-center gap-7">
            {[
              { number: 11, label: 'Projects' },
              { number: 3, label: 'Years of Experience' },
              { number: 5, label: 'Certifications' },
            ].map((item, index) => (
              <div key={index} className="bg-[#333333]/40 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  {item.number}<span className="primary-text">+</span>
                </h3>
                <p><span className="md:text-base text-xs">{item.label}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
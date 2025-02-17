import React from 'react';

const About = ({ aboutImgDark, aboutImgLight, theme }) => {
  const aboutImg = theme === 'dark' ? aboutImgDark : aboutImgLight;

  const stats = [
    { number: 10, label: 'Projects' },
    { number: 2, label: 'Years of Experience' },
    { number: 3, label: 'Certifications' },
  ];

  return (
    <div className={`py-10 h-auto ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`} id='about'>
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <img
            src={aboutImg}
            alt="About section illustration"
            className="object-cover rounded-xl h-[500px]"
          />
        </div>
  
        {/* Text Section */}
        <div className="p-2 sm:w-1/2">
          <div className="my-3">
            <h3 className={`text-4xl font-semibold mb-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
              About <span className="primary-text">Me</span>
            </h3>
            <p className={`text-justify leading-7 w-11/12 mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              I am Fethiya Abdurehim, a passionate Frontend Developer with over 2 years of experience in creating dynamic and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind. I enjoy transforming complex design concepts into user-friendly interfaces while ensuring optimal performance. I am constantly exploring new technologies to enhance my skill set and contribute to innovative projects. Let's work together to bring your ideas to life!
            </p>
          </div>

          {/* Statistics Section */}
          <div className="flex mt-10 items-center gap-7">
            {stats.map((item, index) => (
              <div key={index} className={`bg-[#333333]/40 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <h3 className="md:text-4xl text-2xl font-semibold">
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
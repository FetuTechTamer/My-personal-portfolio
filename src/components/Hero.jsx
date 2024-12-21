import React from 'react';
import HeroDark from '../images/heroDark.jpg';
import HeroLight from '../images/heroLight.jpg';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ theme }) => {
  return (
    <div className='max-w-[1200px] h-[80vh] mx-auto flex flex-col sm:flex-row justify-center items-center' id="Home">
      <div className='flex flex-col my-auto mx-auto sm:w-1/2'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web Designer",
              1000,
              "Mobile App",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className={`md:text-5xl sm:text-4xl text-xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>with 3+ years experience</p>

        <div className="text-5xl flex justify-start gap-16 my-7 text-gray-600">
          <a href="https://www.linkedin.com/in/fethiya-abdurehim-3a0248331" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:text-blue-700 hover:scale-110">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/FetuTechTamer" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:text-gray-800 hover:scale-110">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/fethiyaabdurehim7" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:text-pink-600 hover:scale-110">
            <AiFillInstagram />
          </a>
        </div>

        <div className="relative inline-flex group my-3">
          <a href="#contact" title="Let's Work Together!" role="button"
             className="w-[300px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Let's Work Together!
          </a>
        </div>
      </div>

      <div className='my-auto sm:w-1/2'>
        <img className='object-cover rounded-xl w-[300px] sm:w-[500px] mx-auto h-[485px]' src={theme === 'dark' ? HeroDark : HeroLight} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
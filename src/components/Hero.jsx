import React from 'react';
import HeroDark from '../images/heroDark.jpg';
import HeroLight from '../images/heroLight.jpg';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ theme }) => {
  return (
    <div className='max-w-[1200px] h-auto mx-auto flex flex-col sm:flex-row justify-center items-stretch py-5' id="Home">
      <div className='flex flex-col mx-auto sm:w-1/2'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>
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
        <p className={`md:text-5xl sm:text-4xl text-xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
          with 3+ years experience
        </p>

        <div className="text-5xl flex justify-start gap-16 my-5">
          <a
            href="https://www.linkedin.com/in/fethiya-abdurehim-3a0248331"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform duration-300 hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'} hover:scale-110`}
          >
            <AiFillLinkedin className={`text-${theme === 'dark' ? 'blue-400' : 'blue-700'}`} />
          </a>
          <a
            href="https://github.com/FetuTechTamer"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform duration-300 hover:${theme === 'dark' ? 'text-gray-400' : 'text-gray-800'} hover:scale-110`}
          >
            <AiFillGithub className={`text-${theme === 'dark' ? 'gray-400' : 'gray-800'}`} />
          </a>
          <a
            href="https://www.instagram.com/fethiyaabdurehim7"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform duration-300 hover:${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'} hover:scale-110`}
          >
            <AiFillInstagram className={`text-${theme === 'dark' ? 'pink-400' : 'pink-600'}`} />
          </a>
        </div>

      </div>

      <div className='my-auto sm:w-1/2 flex items-center'> 
        <img className='object-cover rounded-xl w-full sm:w-[500px] max-h-[400px] mx-auto h-auto' src={theme === 'dark' ? HeroDark : HeroLight} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
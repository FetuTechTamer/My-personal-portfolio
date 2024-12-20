import React ,{useState,useEffect} from 'react';
import HeroDark from '../images/heroDark.jpg';
import HeroLight from '../images/heroLight.jpg';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className='max-w-[1200px] h-[80vh] mx-auto flex flex-col sm:flex-row justify-center items-center'  id="Home">
      <div className='flex flex-col my-auto mx-auto sm:w-1/2'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-100'></p>
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
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>with 3+ years experience</p>
        </div>
<div className="text-5xl flex justify-start gap-16 my-7 text-gray-600">
    <a 
        href="https://www.linkedin.com/in/fethiya-abdurehim-3a0248331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="transition-transform duration-300 hover:text-blue-700 hover:scale-110" // LinkedIn color and scale effect
    >
        <AiFillLinkedin />
    </a>
    <a 
        href="https://github.com/FetuTechTamer" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="transition-transform duration-300 hover:text-gray-800 hover:scale-110" // GitHub color and scale effect
    >
        <AiFillGithub />
    </a>
    <a 
        href="https://www.instagram.com/fethiyaabdurehim7/profilecard/?igsh=enpoYWNlODd4ZGVv" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="transition-transform duration-300 hover:text-pink-600 hover:scale-110" // Instagram color and scale effect
    >
        <AiFillInstagram />
    </a>
</div>
        <div className="relative inline-flex group my-3">
          <div className="absolute transition-all duration-1000 opacity-70 inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <a href="/" title="Let's Work Together!" role="button"
             className="w-[300px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Let's Work Together!
          </a>
        </div>
      </div>

      <div className='my-auto sm:w-1/2'>
        <img className='object-cover rounded-xl  w-[300px] sm:w-[500px] mx-auto h-[485px]' src={HeroDark} alt="HeroDark" />
      </div>
    </div>
  );
}

export default Hero;
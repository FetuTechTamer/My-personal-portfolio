import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoDark from '../images/darkMode.png';
import logoWite from '../images/lightMode.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setNav(false); // Close the nav when an item is clicked
        }
    };

    return (
      <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg'>
        <h1 className='text-3xl font-bold primary-color'>Fetu_Tech_Tamer</h1>
        <ul className='hidden md:flex space-x-5'>
            {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item) => (
              <li key={item} 
                  className='p-5 cursor-pointer hover:text-red-600 transition duration-300' 
                  onClick={() => scrollToSection(item.toLowerCase())}>
                  {item}
              </li>
            ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden' role="button" aria-expanded={nav} aria-label="Toggle Navigation">
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='text-3xl font-bold primary-color m-4'>Fetu_Tech_Tamer</h1>
          <ul className='flex flex-col p-8 text-2xl'>
              {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item) => (
                <li key={item} 
                    className='p-5 cursor-pointer hover:text-red-600 transition duration-300' 
                    onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
}

export default Navbar;
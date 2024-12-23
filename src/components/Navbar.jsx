import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import darkModeIcon from '../images/darkMode.png';
import lightModeIcon from '../images/lightMode.png';

const Navbar = ({ theme, setTheme }) => {
  const [icon, setIcon] = useState(theme === 'light' ? darkModeIcon : lightModeIcon);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    setIcon(theme === 'light' ? darkModeIcon : lightModeIcon); 
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [nav, setNav] = React.useState(false);
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
    <div className={`z-10 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
      <button 
        onClick={handleThemeSwitch} 
        className='p-2 bg-accent text-white rounded-full w-14 h-14 flex justify-center items-center shadow-lg transition-transform transform hover:scale-105'
      >
        <img src={icon} alt="Theme Icon" className="w-8 h-8 rounded-full" />
      </button>
      <h1 className='text-3xl font-bold primary-color'>Fetu_Tech_Tamer</h1>
      <ul className='hidden md:flex space-x-5'>
        {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item) => (
          <li 
            key={item} 
            className='relative p-5 cursor-pointer transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg border-b-2 border-transparent hover:border-red-600 hover:text-red-600' 
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
            <span className='absolute left-0 right-0 bottom-0 h-1 bg-red-600 scale-x-0 transition-transform duration-300 hover:scale-x-100'></span>
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
            <li 
              key={item} 
              className='relative p-5 cursor-pointer transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg border-b-2 border-transparent hover:border-red-600 hover:text-red-600' 
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
              <span className='absolute left-0 right-0 bottom-0 h-1 bg-red-600 scale-x-0 transition-transform duration-300 hover:scale-x-100'></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
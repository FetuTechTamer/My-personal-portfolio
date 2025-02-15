import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import darkModeIcon from '../images/darkMode.png';
import lightModeIcon from '../images/lightMode.png';

const Navbar = ({ theme, setTheme }) => {
  const [icon, setIcon] = useState(theme === 'light' ? darkModeIcon : lightModeIcon);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    setIcon(theme === 'light' ? darkModeIcon : lightModeIcon);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleNavToggle = () => {
    setNav(prevNav => !prevNav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Testimonials', 'Contact'];

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
        {navItems.map(item => (
          <li key={item} className='relative p-5 cursor-pointer transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg border-b-2 border-transparent hover:border-red-600 hover:text-red-600'>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            <span className='absolute left-0 right-0 bottom-0 h-1 bg-red-600 scale-x-0 transition-transform duration-300 hover:scale-x-100 rounded-full'></span>
          </li>
        ))}
      </ul>

      <div onClick={handleNavToggle} className='block md:hidden' role="button" aria-expanded={nav} aria-label="Toggle Navigation">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={`fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'} ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-500'} z-50`}>
        <ul className='flex flex-col p-8 text-xl space-y-4'>
          {navItems.map(item => (
            <li key={item} className={`relative p-5 cursor-pointer transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg rounded-md ${theme === 'dark' ? 'border-b border-transparent hover:border-red-600 hover:bg-gray-700 hover:text-red-600' : 'border-b border-transparent hover:border-red-600 hover:bg-gray-200 hover:text-red-600'}`}>
              <Link to={`/${item.toLowerCase()}`} onClick={handleNavToggle} className={`block w-full text-left font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-lg`}>{item}</Link>
              <span className={`absolute left-0 right-0 bottom-0 h-1 ${theme === 'dark' ? 'bg-red-400' : 'bg-red-600'} scale-x-0 transition-transform duration-300 hover:scale-x-100`}></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
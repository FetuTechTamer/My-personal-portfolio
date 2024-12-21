import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

//Import about images
import aboutDark from './images/aboutDark.jpg'; 
import aboutLight from './images/aboutLight.jpg'; 


function App() {
  const [theme, setTheme] = useState('dark');

  // Update body background color based on theme
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About aboutImgDark={aboutDark} aboutImgLight={aboutLight} theme={theme} />
      <Service theme={theme} />
      <Portfolio theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
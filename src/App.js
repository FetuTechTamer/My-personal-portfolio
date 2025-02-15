import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router and Link
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from './components/Projects';
import Skills from './components/Skills'; 
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import about images
import aboutDark from './images/aboutDark.jpg'; 
import aboutLight from './images/aboutLight.jpg'; 

function App() {
  const [theme, setTheme] = useState('dark');

  // Update body background color based on theme
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <Navbar theme={theme} setTheme={setTheme} />
        
        <Routes>
          <Route path="/home" element={<Hero theme={theme} />} /> 
          <Route path="/about" element={<About aboutImgDark={aboutDark} aboutImgLight={aboutLight} theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/skills" element={<Skills theme={theme} />} />
          <Route path="/testimonials" element={<Testimonials theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>

        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
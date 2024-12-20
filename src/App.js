import React from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import aboutImg from './images/aboutDark.jpg'; 
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About aboutImg={aboutImg} />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;


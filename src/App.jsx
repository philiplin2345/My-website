import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="page-content">
        <div>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Portfolio />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

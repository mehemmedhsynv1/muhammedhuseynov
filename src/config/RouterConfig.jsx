import React from 'react';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import { useRef } from 'react';

function RouterConfig() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (ref) =>{
    if(ref.current){
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
        <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} portfolioRef={portfolioRef} servicesRef={servicesRef} resumeRef={resumeRef} contactRef={contactRef} />
        <Home refProp={homeRef}/>
        <About refProp={aboutRef}/>
        <Portfolio refProp={portfolioRef}/>
        <Services refProp={servicesRef}/>
        <Resume refProp={resumeRef}/>
        <Contact refProp={contactRef}/>
        <Footer />
    </div>
  )
}

export default RouterConfig
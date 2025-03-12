import React from 'react';
import '../css/Home.css';
import HomeBg from '../images/homebg.png';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import translations from '../locales/translation';
import { useRef } from "react";
import { gsap } from "gsap";


const Home = ({ refProp }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  const scaleValue = Math.max(1 - scrollY * 0.0005, 0.7);
  
  
  const orbitRef = useRef(null);

  useEffect(() => {
    gsap.to(".orbit-item", {
      rotation: 360,
      repeat: -1,
      duration: 7,
      ease: "linear",
      transformOrigin: "50% 50%"
    });
  }, []);

  

  return (
    <div ref={refProp} className='home-main-div'>
      <div className='home-images-div' style={{transform: `scale(${scaleValue})`, transition: 'transform 0.1s easy-out'}}>
        <div className='home-animation-div'>
      <div className="main">
      <div className="atom-orbit1">
        <div className="atom-nucleus">

        </div>
        
        <div className='earth'>
          <div className="electron1"></div>
          <div className="electron4"></div>
        </div>
        
      </div>
      <div className="atom-orbit2">
        <div className="atom-nucleus">
          
        </div>
        <div className="electron2">
    
        </div>
      </div>
      <div className="atom-orbit3">
        <div className="atom-nucleus">
          
        </div>
        <div className="electron3">
          
        </div>
      </div>
    </div>
    {/* <div className="main2">
      <div className="atom-orbit2">
        <div className="atom-nucleus">
        
        </div>
        <div className="electron">
    
        </div>
      </div>
    </div> */}
    {/* <div className="main3">
      <div className="atom-orbit2">
        <div className="atom-nucleus">
        
        </div>
        <div className="electron">
    
        </div>
      </div>
    </div> */}
    {/* <div className="main4">
      <div className="atom-orbit2">
        <div className="atom-nucleus">
        
        </div>
        <div className="electron">
    
        </div>
      </div>
    </div> */}
          <div className="round3">
            <div className="round2">
              <div className="round1">
                <img id='home-img' src={HomeBg} alt="" />
              </div>
            </div>
          </div>
          </div>
          </div>

          
        <div className='home-texts-div'>
            <p id='home-big-text'>{t.home_texts.my_name}</p>
            <p id='home-big-text'>{t.home_texts.my_job}</p>
            <div className='home-span-div'>
                <span id='home-first-span'>{t.home_texts.welcome}</span><span id='home-second-span'>{t.home_texts.my_portfolio}</span>
            </div>
        </div>
    </div>
  )
}

export default Home
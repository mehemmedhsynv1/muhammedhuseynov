import React from 'react';
import AboutImg from '../images/about-img.png';
import '../css/About.css';
import Dotted from '../images/dotted2.avif';
import { useSelector } from 'react-redux';
import translations from '../locales/translation';
import JsImg from '../images/js.png';
import ReactImg from '../images/react.png';
import HtmlImg2 from '../images/html2.png';
import CssImg2 from '../images/css2.png';
import RestApi from '../images/rest-api.png';
import  gsap  from 'gsap';

function About({ refProp }) {

    const language = useSelector((state) => state.language.language);
    const t = translations[language];



    document.addEventListener('mousemove', mouseMoveFunc);
function mouseMoveFunc(e) {
  const depth = 10;
  const moveX = ((e.pageX)-(window.innerWidth/2))/depth;
  const moveY = ((e.pageY)-(window.innerHeight/2))/depth;
  gsap.to(".circle", {
    duration: 3,
    x: moveX,
    y: moveY,
    ease: "slow",
    stagger: 0,
    overwrite: true
  });
}



  return (
    <div ref={refProp} className='about-main-div'>
      <div className='my-img-div'>
      <div class="circle" data-depth="15">
        <img id='circle-img1' src={JsImg} alt="" />
      </div>
      <div class="circle circle2" data-depth="10">
        <img id='circle-img2' src={ReactImg} alt="" />
      </div>
      <div class="circle circle3" data-depth="5 ">
        <img id='circle-img3' src={HtmlImg2} alt="" />
      </div>
      <div class="circle circle4" data-depth="5 ">
        <img id='circle-img4' src={CssImg2} alt="" />
      </div>
      <div class="circle circle5" data-depth="5 ">
        <img id='circle-img5' src={RestApi} alt="" />
      </div>
        <div className="round3">
          <div className="round2">
            <div className="round1">
              <div className='theme-color-div'>
                <div className="theme-color"></div>
                <img id='about-img' src={AboutImg} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='my-bio-texts'>
        <p id='my-bio-text'>{t.my_bio_texts.my_bio}</p>
        <p id='my-bio'>{t.my_bio_texts.bio}</p>
        <div className='about-deg-main'>
          <div className='about-deg'>
            <p id='about-deg-text'>HTML</p>
            <div className='grey-line'>
              <div className='blue-line1'>
              <div className='deg-div1'>92%
                <div className='triangle'></div>
              </div>
              </div>
              
            </div>
          </div>
          <div className='about-deg'>
            <p id='about-deg-text'>CSS</p>
            <div className='grey-line'>
              <div className='blue-line2'></div>
              <div className='deg-div2'>95%
                <div className='triangle'></div>
              </div>
            </div>
          </div>
          <div className='about-deg'>
            <p id='about-deg-text'>JavaScript</p>
            <div className='grey-line'>
              <div className='blue-line3'></div>
              <div className='deg-div3'>90%
                <div className='triangle'></div>
              </div>
            </div>
          </div>
          <div className='about-deg'>
            <p id='about-deg-text'>ReactJS</p>
            <div className='grey-line'>
              <div className='blue-line4'></div>
              <div className='deg-div4'>90%
                <div className='triangle'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-button-div'>
          <button className='first-button'>{t.my_bio_texts.hire_me}</button>
          <button className='second-button'>{t.my_bio_texts.download_cv}</button>
        </div>
      </div>
    </div>
  )
}

export default About
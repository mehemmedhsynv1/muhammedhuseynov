import React, { useState } from 'react';
import '../css/Portfolio.css';
// import AngryImg from '../images/angry.png';
// import HappyImg from '../images/happy.png';
// import LoveImg from '../images/love.png';
// import Thoughtful from '../images/thoughtful.png';
// import SupImg from '../images/sup.png';
// import SadImg2 from '../images/sad2.png';
// import LoveImg2 from '../images/love2.png';
import { useSelector } from 'react-redux';
import translations from '../locales/translation';
import ResponsiveImg from '../images/responsive-img.jpeg';
import ResponsiveImg2 from '../images/responsive-img2.png';
import ApiIntegration1 from '../images/api-integration.webp';
import ApiIntegration2 from '../images/api-integration2.png';
import Animation1 from '../images/animation1.webp';
import Animation2 from '../images/portfolio-img.png';

 
function Portfolio({ refProp }) {
  const [filter, setFilter] = useState("all");

    const language = useSelector((state) => state.language.language);
    const t = translations[language];

  return (
    <div ref={refProp} className='portfolio-main-div'>
        <p id='portfolio-big-text'>{t.my_portfolio_texts.my_portfolio}</p>
        <div className='p-buttons-div'>
          <p onClick={() => setFilter("all")} className='p-buttons'>{t.my_portfolio_texts.all}</p>
          <p onClick={() => setFilter("happy")} className='p-buttons'>{t.my_portfolio_texts.happy}</p>
          <p onClick={() => setFilter("sad")} className='p-buttons'>{t.my_portfolio_texts.sad}</p>
          <p onClick={() => setFilter("love")} className='p-buttons'>{t.my_portfolio_texts.love}</p>
        </div>
        <div className='portfolio-boxes-main'>
          <div className='port-box-div'>
              <div className={`portfolio-box3 ${filter === "all" || filter === "love" ? "show" : "hidden"}`}>
                <img id='p-box-img' src={ApiIntegration1} alt="" />
              </div>
              <div className={`portfolio-box ${filter === "all" || filter === "happy" ? "show" : "hidden"}`}>
                <img id='p-box-img' src={ResponsiveImg} alt="" />
              </div>
              {/* <div className={`portfolio-box ${filter === "all" || filter === "love" ? "show" : "hidden"}`}>
                <img id='p-box-img' src={LoveImg} alt="" />
              </div> */}
          </div>
          <div className='port-box-div'>
            <div className={`portfolio-box2 ${filter === "all" || filter === "sad" ? "show" : "hidden"}`}>
              <img id='p-box-img-t' src={Animation1} alt="" />
            </div>
            <div  className={`portfolio-box ${filter === "all" || filter === "happy" ? "show" : "hidden"}`}>
              <img id='p-box-img' src={ResponsiveImg2} alt="" />
            </div>
          </div>
          <div className='port-box-div'>
            <div  className={`portfolio-box ${filter === "all" || filter === "sad" ? "show" : "hidden"}`}>
              <img id='p-box-img' src={Animation2} alt="" />
            </div>
            <div  className={`portfolio-box3 ${filter === "all" || filter === "love" ? "show" : "hidden"}`}>
              <img id='p-box-img' src={ApiIntegration2} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio
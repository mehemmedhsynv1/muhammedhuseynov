import React from 'react';
import { useSelector } from 'react-redux';
import translations from '../locales/translation';
import { FaCode } from "react-icons/fa6";
import { GiCrossedChains } from "react-icons/gi";
import { MdOutlineAnimation } from "react-icons/md";
import '../css/Services.css';

function Services({ refProp }) {
    const language = useSelector((state) => state.language.language);
    const t = translations[language];
  return (
    <section ref={refProp} className='services-sec'>
      <p id='services-big-text'>{t.services_infos.services_text}</p>
      <div className='services-main-div'>
        <div className='services-div'>
            <div className='services-icon'>
                <FaCode />
            </div>
            <p id='services-name'>{t.services_infos.name1}</p>
            <p id='services-title'>{t.services_infos.title1}</p>
        </div>
        <div className='services-div'>
            <div className='services-icon'>
                <GiCrossedChains />
            </div>
            <p id='services-name'>{t.services_infos.name2}</p>
            <p id='services-title'>{t.services_infos.title2}</p>
        </div>
        <div className='services-div'>
            <div className='services-icon'>
                <MdOutlineAnimation />
            </div>
            <p id='services-name'>{t.services_infos.name3}</p>
            <p id='services-title'>{t.services_infos.title3}</p>
        </div>
      </div>
    </section>
  )
}

export default Services
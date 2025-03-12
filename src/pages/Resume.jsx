import React from 'react';
import '../css/Resume.css';
import HiImg from '../images/hi-img.png';
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { useSelector } from 'react-redux';
import translations from '../locales/translation';

function Resume({ refProp }) {
    const language = useSelector((state) => state.language.language);
    const t = translations[language];
  return (
    <div ref={refProp} className='resume-main-div'>
        <p id='resume-big-text'>{t.resume_texts.resume}</p>
        <div className='resume-div'>
            <div className='resume-img-div'>
                <img id='resume-img' src={HiImg} alt="" />
            </div>
            <div className='work-exp-main'>
                <p id='work-exp-text'>{t.resume_texts.work_exp}</p>
                <div>
                  <div className='resume-texts-div'>
                    <div className='resume-t-div'>
                        <p id='work-name'>{t.resume_texts.job_name}</p>
                        <div className='full-time'>{t.resume_texts.job_time}</div>
                    </div>
                    <div className='resume-b-div'>
                        <div className='res-main-div'>
                            <div className='res-div'>
                                <FaBuilding />
                                <p id='company-info'>{t.resume_texts.company}</p>
                            </div>
                            <div className='res-div'>
                                <FaLocationDot />
                                <p id='company-info'>{t.resume_texts.city}</p>
                            </div>
                        </div>
                        <div className='res-div'>
                            <CiCalendarDate style={{fontSize:"18px"}} />
                            <p id='company-info'>{t.resume_texts.date}</p>
                        </div>
                    </div>
                    <hr />
                  </div>
                  
                </div>
                <p id='work-exp-text'>{t.resume_texts.certificate}</p>
                <div className='resume-texts-div'>
                    <div className='resume-t-div'>
                        <p id='work-name'>{t.resume_texts.c_name}</p>
                        <div className='res-div'>
                            <CiCalendarDate style={{fontSize:"18px"}} />
                            <p id='company-info'>{t.resume_texts.date2}</p>
                        </div>
                    </div>
                    <div className='resume-b-div'>
                        <div className='res-main-div'>
                            <div className='res-div'>
                                <FaLocationDot />
                                <p id='company-info'>Baku Code Center</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
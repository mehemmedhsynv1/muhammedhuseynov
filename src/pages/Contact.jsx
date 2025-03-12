import React from 'react';
import '../css/Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useSelector } from 'react-redux';
import translations from '../locales/translation';

function Contact({ refProp }) {
    const language = useSelector((state) => state.language.language);
    const t = translations[language];
  return (
    <div ref={refProp}>
        <p id='contact-big-text'>{t.contact_me_texts.contact_me}</p>
    <div className='contact-main'>
        <div className='contact-left-div'>
            <div className='f-l-name'>
                <div className='name-div'>
                    <label id='contact-label'>{t.contact_me_texts.first_name}</label>
                    <input id='contact-input' type="text" />
                </div>
                <div className='name-div'>
                    <label id='contact-label'>{t.contact_me_texts.last_name}</label>
                    <input id='contact-input' type="text" />
                </div>
            </div>
            <div className='contact-email'>
                <label id='contact-label'>{t.contact_me_texts.email}</label>
                <input id='contact-input' type="email" />
            </div>
            <div className='contact-textarea'>
                <label id='contact-label'>{t.contact_me_texts.message}</label>
                <textarea id="textarea"></textarea>
            </div>
            <div>
                <button className='contact-btn'>{t.contact_me_texts.send_message}</button>
            </div>
        </div>
        <div className="contact-right">
            <div className='contact-info-div'>
                <div className='contact-icon'>
                    <FaLocationDot />
                </div>
                <div className='contact-texts'>
                    <p id='info-name'>{t.contact_me_texts.address}</p>
                    <p id='info-title'>{t.contact_me_texts.address_text}</p>
                </div>
            </div>
            <div className='contact-info-div'>
                <div className='contact-icon'>
                    <FaPhoneAlt />
                </div>
                <div className='contact-texts'>
                    <p id='info-name'>{t.contact_me_texts.phone}</p>
                    <p id='info-title'>+994 50 351 43 71</p>
                </div>
            </div>
            <div className='contact-info-div'>
                <div className='contact-icon'>
                    <IoIosMail />
                </div>
                <div className='contact-texts'>
                    <p id='info-name'>Email</p>
                    <p id='info-title'>mhmmdhsynv2002@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
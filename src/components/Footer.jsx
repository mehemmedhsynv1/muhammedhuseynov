import React from 'react';
import '../css/Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { useSelector } from 'react-redux';
import translations from '../locales/translation';


function Footer() {
    const language = useSelector((state) => state.language.language);
    const t = translations[language];
  return (
    <div className='footer-main'>
        <div className='f-about-div'>
            <p id='footer-name'>{t.footer_texts.about}</p>
            <p id='footer-title'>{t.footer_texts.about_text}</p>
        </div>
        <div className='f-connect-div'>
            <p id='footer-name'>{t.footer_texts.connect}</p>
            <div className='footer-social-main'>
                <div className='footer-social-div'>
                    <FaInstagram />
                </div>
                <div className='footer-social-div'>
                    <IoLogoWhatsapp />
                </div>
                <div className='footer-social-div'>
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
        <div className='f-services-div'>
            <p id='footer-name'>{t.footer_texts.services}</p>
            <p id='footer-title'>{t.footer_texts.responsive}</p>
            <p id='footer-title'>{t.footer_texts.api}</p>
            <p id='footer-title'>{t.footer_texts.animation}</p>
            <p id='footer-title'>{t.footer_texts.portfolio}</p>
        </div>
        <div className='f-contact-div'>
            <p id='footer-name'>{t.footer_texts.contact}</p>
            <p id="footer-title">{t.footer_texts.address}</p>
            <p id='footer-title'>mhmmdhsynv2002@gmail.com</p>
            <p id='footer-title'>+994 50 351 43 71</p>
        </div>
    </div>
  )
}

export default Footer
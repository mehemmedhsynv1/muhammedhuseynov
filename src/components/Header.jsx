import React, { useState } from 'react';
import '../css/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import translations from '../locales/translation';
import { setLanguage } from '../redux/slices/languageSlice';
import { RxHamburgerMenu } from "react-icons/rx";
import MyLogo2 from '../images/my-logo2.png';

function Header({ scrollToSection, homeRef, aboutRef, portfolioRef, servicesRef, resumeRef, contactRef }) {

    const [open, setOpen] = useState(false);

    const changeOpen = () => {
        setOpen(!open);
    }

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const t = translations[language];



    const [bgColor, setBgColor] = useState("transparent")
    const handleScroll = () => {
        if(window.scrollY > 50){
            setBgColor("rgba(7, 24, 103, 0.4)")
        }else{
            setBgColor("transparent")
        }
    }
    window.addEventListener("scroll", handleScroll)
  return (
    <header>
        <div style={{backgroundColor: bgColor}} className='header-main-div'>
            <div className='my-logo-div'>
                <img id='my-logo' src={MyLogo2} alt="" />
            </div>
            <div className='header-buttons-div'>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(homeRef)} className='link-slide'>{t.header_buttons.home}</p>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(aboutRef)} className='link-slide'>{t.header_buttons.about}</p>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(portfolioRef)} className='link-slide'>{t.header_buttons.portfolio}</p>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(servicesRef)} className='link-slide'>{t.header_buttons.services}</p>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(resumeRef)} className='link-slide'>{t.header_buttons.resume}</p>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(contactRef)} className='link-slide'>{t.header_buttons.contact}</p>
                    <div className='header-underline'></div>
                </div>
                {/* <p className='header-button'>Home</p>
                <p className='header-button'>About</p>
                <p className='header-button'>Portfolio</p>
                <p className='header-button'>Services</p>
                <p className='header-button'>Resume</p>
                <p className='header-button'>Contact</p> */}
            </div>
            {/* <div className='header-social-icons'></div> */}
            <select className='select-lang' onChange={(e) => dispatch(setLanguage(e.target.value))}>
                <option value="az">AZ</option>
                <option value="en">EN</option>
            </select>
            <div onClick={changeOpen} className="hamburger-menu">
                <RxHamburgerMenu />
            </div>
            <div className={`slide-div-main ${open ? "open" : ""} `}>
                <div onClick={changeOpen} className='exit-div'>X</div>
                <select className='select-lang2' onChange={(e) => dispatch(setLanguage(e.target.value))}>
                    <option value="az">AZ</option>
                    <option value="en">EN</option>
                </select>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(homeRef)} className='link-slide'>{t.header_buttons.home}</p>
                    <div className='header-underline2'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(aboutRef)} className='link-slide'>{t.header_buttons.about}</p>
                    <div className='header-underline2'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(portfolioRef)} className='link-slide'>{t.header_buttons.portfolio}</p>
                    <div className='header-underline2'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(servicesRef)} className='link-slide'>{t.header_buttons.services}</p>
                    <div className='header-underline2'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(resumeRef)} className='link-slide'>{t.header_buttons.resume}</p>
                    <div className='header-underline2'></div>
                </div>
                <div className='link-div'>
                    <p onClick={() => scrollToSection(contactRef)} className='link-slide'>{t.header_buttons.contact}</p>
                    <div className='header-underline2'></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
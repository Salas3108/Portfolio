import React, { useEffect, useState } from "react";
import {Link , useLocation} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import GetAppIcon from '@mui/icons-material/GetApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';


function Navbar() {
    const [expandNavbar , setExpandNavbar] = useState (false);
    const location = useLocation() ;
    const { darkMode, toggleTheme } = useTheme();
    const { lang, toggleLang, t } = useLanguage();

    useEffect( () => {
        setExpandNavbar (false);
    } , [location] );

    return(
        <nav className="navbar" id={expandNavbar ? "open" : "close"} aria-label={t('nav.ariaLabel')}>
            <div className="toggleButton"> 
                <button
                    onClick={() => setExpandNavbar((prev) => !prev)}
                    aria-expanded={expandNavbar}
                    aria-controls="navbar-links"
                >
                    {expandNavbar ? <CloseIcon aria-hidden="true" /> : <ReorderIcon aria-hidden="true" />}
                </button>
            </div>
            <div className="links" id="navbar-links">
                <Link to="/"> {t('nav.home')}</Link>
                <Link to="/experience"> {t('nav.education')} </Link>
                <Link to="/professional"> {t('nav.career')} </Link>
                <Link to="/Projects"> {t('nav.projects')} </Link>
                <a href="/cv.pdf" className="cv-link" download>
                    <GetAppIcon aria-hidden="true" /> {t('nav.cv')}
                </a>
                <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
                    {lang === 'en' ? 'FR' : 'EN'}
                </button>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {darkMode ? <LightModeIcon aria-hidden="true" /> : <DarkModeIcon aria-hidden="true" />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;


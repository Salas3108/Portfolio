import React from 'react'
import GitHubIconIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';
function Footer() {
  const { t } = useLanguage();
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <a href="https://github.com/Salas3108" target="_blank" rel="noopener noreferrer" aria-label={t('footer.github')}>
          <GitHubIconIcon aria-hidden="true" />
        </a>
        <a href="mailto:salas.merzouk54@gmail.com" aria-label={t('footer.email')}>
          <EmailIcon aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/salas-merzouk-2a7217290/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.linkedin')}>
          <LinkedInIcon aria-hidden="true" />
        </a>
      </div> 
      <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
}

export default Footer;
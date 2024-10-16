import React from 'react'
import GitHubIconIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to="https://github.com/Salas3108">
          <GitHubIconIcon />
        </Link>
          <EmailIcon />
        <Link to="https://www.linkedin.com/in/salas-merzouk-2a7217290/Salas3108">
          <LinkedInIcon />
        </Link>
        </div> 
        <p> &copy; 2023 salasMerzouk.com</p>
    </div>
  );
}

export default Footer;
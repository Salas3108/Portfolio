import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div>
        <div className='about'> 
          <h2>  Hi, I am Merzouk Salas </h2>
          <div className='prompt'>  
            <p> A MIAGE student at Unioversity of Lille - France </p>
            <Link to="https://github.com/Salas3108">
              <GitHubIcon />
            </Link>
            <EmailIcon />
            <Link to="https://www.linkedin.com/in/salas-merzouk-2a7217290/Salas3108">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h2>  My Skills </h2>
        <div className='skill-categories'>
        <div className='skill-category'>
            <h3> Programming Languages </h3>
      
            <p> I am proficient in a variety of programming languages, including: C, Python, Java, JavaScript, and PHP.</p>

          </div>
          <div className='skill-category'>
            <h3> Web Development </h3>
            
            <p> I am proficient in building modern web applications using React, Node.js, Express, Tailwind CSS, FastAPI, and other cutting-edge technologies.</p>
          </div>

          <div className='skill-category'>
            <h3> AI & Machine Learning </h3>
            
            <p> I have hands-on experience with machine learning using Python and its popular libraries like scikit-learn and Surprise. I am comfortable working with various machine learning algorithms and techniques.</p>
            
          </div>

          <div className='skill-category'>
            <h3> Databases </h3>
              
            <p> I am well-versed in SQL databases, with experience using MySQL, PostgreSQL, and Oracle. I also possess knowledge of NoSQL databases such as MongoDB and Firebase.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
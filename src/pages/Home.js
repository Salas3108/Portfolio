import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import "../styles/home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='main-title'>Salas Merzouk</h1>
            <p className='hero-subtitle'>Full Stack Developer & MIAGE Student</p>
            <p className='hero-description'>
              Building scalable web applications and intelligent systems. Passionate about software architecture, 
              AI solutions, and creating impactful digital experiences.
            </p>
            <div className='social-links'>
              <a href="https://github.com/Salas3108" target="_blank" rel="noopener noreferrer" className='social-btn'>
                <GitHubIcon /> GitHub
              </a>
              <a href="mailto:salas.merzouk54@gmail.com" className='social-btn'>
                <EmailIcon /> Contact
              </a>
              <a href="https://www.linkedin.com/in/salas-merzouk-2a7217290/" target="_blank" rel="noopener noreferrer" className='social-btn'>
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className='hero-divider'></div>
      </div>

      <div className='skills-section'>
        <div className='section-header'>
          <h2 className='section-title'>Core Competencies</h2>
          <p className='section-description'>Technologies and skills I bring to every project</p>
        </div>
        
        <div className='skill-grid'>
          <div className='skill-card'>
            <div className='skill-icon'>
              <CodeIcon />
            </div>
            <h3>Programming Languages</h3>
            <p>Proficient in C, Python, Java, JavaScript, and PHP. Strong foundation in algorithm design and software patterns.</p>
            <div className='tech-tags'>
              <span className='tag'>Python</span>
              <span className='tag'>Java</span>
              <span className='tag'>JavaScript</span>
            </div>
          </div>

          <div className='skill-card'>
            <div className='skill-icon'>
              <BuildIcon />
            </div>
            <h3>Web Development</h3>
            <p>Modern full-stack development using React, Node.js, Express, FastAPI. Expertise in building responsive and performant applications.</p>
            <div className='tech-tags'>
              <span className='tag'>React</span>
              <span className='tag'>Node.js</span>
              <span className='tag'>Express</span>
            </div>
          </div>

          <div className='skill-card'>
            <div className='skill-icon'>
              <SchoolIcon />
            </div>
            <h3>AI & Machine Learning</h3>
            <p>Hands-on experience with ML algorithms using Python libraries. Skilled in data analysis, model training, and recommendation systems.</p>
            <div className='tech-tags'>
              <span className='tag'>scikit-learn</span>
              <span className='tag'>Python</span>
              <span className='tag'>AI/ML</span>
            </div>
          </div>

          <div className='skill-card'>
            <div className='skill-icon'>
              <StorageIcon />
            </div>
            <h3>Databases</h3>
            <p>Expertise with SQL databases (MySQL, PostgreSQL, Oracle) and NoSQL solutions (MongoDB, Firebase). Data modeling and optimization.</p>
            <div className='tech-tags'>
              <span className='tag'>PostgreSQL</span>
              <span className='tag'>MongoDB</span>
              <span className='tag'>Firebase</span>
            </div>
          </div>
        </div>
      </div>

      <div className='expertise-section'>
        <h2>Professional Expertise</h2>
        <div className='expertise-grid'>
          <div className='expertise-item'>
            <div className='expertise-number'>7+</div>
            <p>Projects Completed</p>
          </div>
          <div className='expertise-item'>
            <div className='expertise-number'>2</div>
            <p>Professional Internships</p>
          </div>
          <div className='expertise-item'>
            <div className='expertise-number'>4</div>
            <p>Years Education</p>
          </div>
          <div className='expertise-item'>
            <div className='expertise-number'>∞</div>
            <p>Always Learning</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

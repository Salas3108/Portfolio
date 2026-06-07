import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/home.css";

function Home() {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='hero-content'>
          <h1>Salas Merzouk</h1>
          <p className='subtitle'>Full Stack Developer & MIAGE Student</p>
          <p className='description'>
            I build web applications and intelligent systems with a focus on scalability and user experience.
            Currently exploring AI solutions and modern software architecture at University of Lille.
          </p>
          
          <div className='social-buttons'>
            <a href="https://github.com/Salas3108" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
              <GitHubIcon /> GitHub
            </a>
            <a href="mailto:salas.merzouk54@gmail.com" className='btn btn-primary'>
              <EmailIcon /> Email
            </a>
            <a href="https://www.linkedin.com/in/salas-merzouk-2a7217290/" target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className='about'>
        <h2>About</h2>
        <p>
          I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. 
          My journey in software development has equipped me with expertise in building scalable web applications, 
          implementing machine learning solutions, and architecting complex systems.
        </p>
        <p>
          When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or diving deeper 
          into AI and data science. I believe in continuous learning and staying updated with the latest industry trends.
        </p>
      </div>

      <div className='skills'>
        <h2>Skills & Technologies</h2>
        <div className='skill-columns'>
          <div className='skill-column'>
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className='skill-column'>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
              <li>Material-UI</li>
            </ul>
          </div>

          <div className='skill-column'>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>FastAPI</li>
              <li>Spring Boot</li>
            </ul>
          </div>

          <div className='skill-column'>
            <h3>Databases & Tools</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className='skill-column'>
            <h3>AI & ML</h3>
            <ul>
              <li>scikit-learn</li>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Recommendation Systems</li>
            </ul>
          </div>

          <div className='skill-column'>
            <h3>Other Skills</h3>
            <ul>
              <li>Microservices</li>
              <li>REST APIs</li>
              <li>Agile Methodology</li>
              <li>System Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

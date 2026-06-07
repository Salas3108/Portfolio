import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import "../styles/home.css";

function Home() {
  const featuredProjects = [
    {
      title: "CiblOrgaSport",
      description: "Sports organization platform with team management and championship scheduling",
      tags: ["React", "Node.js", "MongoDB"],
      links: [
        { label: "Frontend", url: "https://github.com/Salas3108/CiblOrgaSport_Front" },
        { label: "Backend", url: "https://github.com/Salas3108/CiblOrgaSport_Back" }
      ]
    },
    {
      title: "Restaurant Management System",
      description: "Complete solution for handling reservations, menus, and customer orders",
      tags: ["Full Stack", "Database", "API"],
      links: [{ label: "GitHub", url: "https://github.com/ElsaLogier/projet-PAI.git" }]
    },
    {
      title: "Microservices Messaging",
      description: "Scalable real-time messaging platform built with microservices architecture",
      tags: ["Microservices", "API", "Node.js"],
      links: [{ label: "GitHub", url: "https://github.com/Salas3108/Projet_Alom" }]
    }
  ];

  return (
    <div className='home'>
      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='hero-title'>
              Hi, I&apos;m <span className='highlight'>Salas Merzouk</span>
            </h1>
            <p className='hero-subtitle'>
              Full Stack Developer & MIAGE Student
            </p>
            <p className='hero-description'>
              I build scalable web applications and intelligent systems. Passionate about modern architecture, 
              AI solutions, and creating exceptional digital experiences.
            </p>
            <div className='cta-buttons'>
              <a href="mailto:salas.merzouk54@gmail.com" className='btn btn-primary'>
                Get In Touch
                <ArrowRightIcon />
              </a>
              <Link to="/projects" className='btn btn-secondary'>
                View My Work
              </Link>
            </div>
          </div>
          <div className='hero-visual'>
            <div className='gradient-blob blob-1'></div>
            <div className='gradient-blob blob-2'></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='featured'>
        <div className='section-header'>
          <h2>Featured Projects</h2>
          <p>A selection of my most impactful work</p>
        </div>
        <div className='projects-grid'>
          {featuredProjects.map((project, index) => (
            <div key={index} className='project-card'>
              <div className='card-header'>
                <h3>{project.title}</h3>
                <div className='card-number'>{String(index + 1).padStart(2, '0')}</div>
              </div>
              <p className='card-description'>{project.description}</p>
              <div className='card-tags'>
                {project.tags.map((tag, i) => (
                  <span key={i} className='tag'>{tag}</span>
                ))}
              </div>
              <div className='card-links'>
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className='link-btn'>
                    {link.label}
                    <ArrowRightIcon />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='view-more'>
          <Link to="/projects" className='link-with-arrow'>
            View all projects <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className='skills-section'>
        <div className='section-header'>
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </div>
        <div className='skills-grid'>
          <div className='skill-group'>
            <h4>Backend</h4>
            <div className='skill-list'>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>FastAPI</span>
              <span>Apache Kafka</span>
            </div>
          </div>
          <div className='skill-group'>
            <h4>Frontend</h4>
            <div className='skill-list'>
              <span>React</span>
              <span>Next.js</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>HTML & CSS</span>
              <span>Tailwind & Material-UI</span>
            </div>
          </div>
          <div className='skill-group'>
            <h4>Databases</h4>
            <div className='skill-list'>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>Oracle</span>
            </div>
          </div>
          <div className='skill-group'>
            <h4>DevOps & CI/CD</h4>
            <div className='skill-list'>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>GitHub Actions</span>
              <span>Grafana</span>
              <span>Git</span>
              <span>Azure DevOps</span>
            </div>
          </div>
          <div className='skill-group'>
            <h4>Data & AI/ML</h4>
            <div className='skill-list'>
              <span>Python</span>
              <span>Pandas</span>
              <span>scikit-learn</span>
              <span>Power BI</span>
              <span>Data Analysis</span>
              <span>Machine Learning</span>
            </div>
          </div>
          <div className='skill-group'>
            <h4>Other Skills</h4>
            <div className='skill-list'>
              <span>Microservices Architecture</span>
              <span>REST APIs</span>
              <span>SOLID Principles</span>
              <span>Clean Architecture</span>
              <span>Agile (Scrum/Jira)</span>
              <span>System Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='about-section'>
        <div className='about-content'>
          <div className='about-text'>
            <h2>About Me</h2>
            <p>
              I&apos;m a passionate developer with a strong foundation in full-stack development. 
              My journey has equipped me with expertise in building scalable applications, 
              implementing ML solutions, and architecting complex systems.
            </p>
            <p>
              Currently pursuing a Master&apos;s degree in Computer Science at University of Lille, 
              I combine academic knowledge with practical industry experience from internships at 
              AXA France and CTIB. I&apos;m always exploring new technologies and pushing the boundaries 
              of what&apos;s possible.
            </p>
            <div className='about-stats'>
              <div className='stat'>
                <div className='stat-number'>7+</div>
                <p>Projects</p>
              </div>
              <div className='stat'>
                <div className='stat-number'>2</div>
                <p>Internships</p>
              </div>
              <div className='stat'>
                <div className='stat-number'>4</div>
                <p>Years Learning</p>
              </div>
            </div>
          </div>
          <Link to="/experience" className='about-cta'>
            <div className='cta-card'>
              <h3>My Journey</h3>
              <p>Education & Experience</p>
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home


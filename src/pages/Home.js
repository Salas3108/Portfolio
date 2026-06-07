import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import "../styles/home.css";

function Home() {
  const projects = [
    {
      title: "CiblOrgaSport",
      description: "Complete sports management platform with team coordination, championship scheduling, and real-time updates. Built with React and Node.js for seamless user experience.",
      tags: ["React", "Node.js", "MongoDB"],
      links: [
        { label: "Frontend", url: "https://github.com/Salas3108/CiblOrgaSport_Front" },
        { label: "Backend", url: "https://github.com/Salas3108/CiblOrgaSport_Back" }
      ]
    },
    {
      title: "Restaurant Management System",
      description: "End-to-end solution for restaurant operations including reservations, menu management, and customer order handling. Designed for scalability and ease of use.",
      tags: ["Full Stack", "Database", "API"],
      links: [{ label: "GitHub", url: "https://github.com/ElsaLogier/projet-PAI.git" }]
    },
    {
      title: "Microservices Messaging",
      description: "Scalable real-time messaging platform leveraging microservices architecture. Enables reliable communication with message queuing and event-driven design.",
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
              Full Stack Developer & Software Architect
            </h1>
            <p className='hero-subtitle'>
              Turning complex problems into elegant, scalable solutions
            </p>
            <p className='hero-description'>
              I build robust applications and intelligent systems that drive business value. With expertise spanning full-stack development, microservices architecture, and emerging technologies, I deliver solutions that matter.
            </p>
            <div className='cta-buttons'>
              <a href="mailto:salas.merzouk54@gmail.com" className='btn btn-primary'>
                Let&apos;s Talk
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

      {/* About Section */}
      <section className='about-section'>
        <div className='about-header'>
          <h2>About Me</h2>
        </div>
        <div className='about-content'>
          <div className='about-text'>
            <p>
              I&apos;m a passionate software developer and architect with a strong foundation in full-stack development. Over the past few years, I&apos;ve had the opportunity to work on diverse projects ranging from enterprise applications at AXA France to innovative backend systems at CTIB, continuously pushing the boundaries of what&apos;s possible in software engineering.
            </p>
            <p>
              My approach combines technical excellence with strategic thinking. I don&apos;t just write code—I design systems. Whether it&apos;s architecting microservices for scalability, implementing AI-driven solutions, or optimizing database performance, I focus on delivering solutions that solve real business problems and provide measurable value.
            </p>
            <p>
              Currently pursuing a Master&apos;s degree in Computer Science at University of Lille, I&apos;m deeply invested in emerging technologies, including machine learning, cloud architecture, and DevOps practices. I&apos;m driven by curiosity and the opportunity to collaborate with teams that share a commitment to building exceptional software.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className='services-section'>
        <div className='section-header'>
          <h2>What I Do</h2>
          <p>Services and expertise</p>
        </div>
        <div className='services-grid'>
          <div className='service-card'>
            <div className='service-icon'>01</div>
            <h3>Full Stack Development</h3>
            <p>End-to-end web application development with modern frameworks. From responsive frontends to scalable backends, I create solutions that perform and delight.</p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>02</div>
            <h3>Microservices & Architecture</h3>
            <p>Design and implementation of distributed systems. I build scalable architectures that handle growth, reduce complexity, and enable rapid deployment.</p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>03</div>
            <h3>AI & Machine Learning</h3>
            <p>Intelligent systems and data-driven solutions. From recommendation engines to predictive analytics, I leverage ML to unlock insights and automate workflows.</p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>04</div>
            <h3>DevOps & Cloud</h3>
            <p>Infrastructure automation and deployment pipelines. Docker, Kubernetes, and cloud platforms—I ensure applications run reliably at scale.</p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>05</div>
            <h3>Performance Optimization</h3>
            <p>Database tuning, code optimization, and system performance. I identify bottlenecks and implement solutions that improve speed and reliability.</p>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className='recent-work'>
        <div className='section-header'>
          <h2>Recent Work</h2>
          <p>A selection of my most impactful projects</p>
        </div>
        <div className='projects-grid'>
          {projects.map((project, index) => (
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
            Explore all projects <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className='final-cta'>
        <div className='cta-content'>
          <h2>Ready to work together?</h2>
          <p>Let&apos;s discuss how I can help you build something extraordinary.</p>
          <a href="mailto:salas.merzouk54@gmail.com" className='cta-button'>
            Get In Touch
            <ArrowRightIcon />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home



import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import "../styles/home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
  })
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};



function Home() {
  const { t } = useLanguage();
  const projects = [
    {
      titleKey: "project.ciblorgasport.title",
      descKey: "project.ciblorgasport.desc",
      image: "/projects/ciblorgasport.png",
      tags: ["React", "Node.js", "MongoDB"],
      links: [
        { labelKey: "project.link.frontend", url: "https://github.com/Salas3108/CiblOrgaSport_Front" },
        { labelKey: "project.link.backend", url: "https://github.com/Salas3108/CiblOrgaSport_Back" }
      ]
    },
    {
      titleKey: "project.restaurant.title",
      descKey: "project.restaurant.desc",
      image: "/projects/restaurant.png",
      tags: ["Full Stack", "Database", "API"],
      links: [{ labelKey: "project.link.github", url: "https://github.com/ElsaLogier/projet-PAI.git" }]
    },
    {
      titleKey: "project.microservices.title",
      descKey: "project.microservices.desc",
      image: "/projects/microservices.png",
      tags: ["Microservices", "API", "Node.js"],
      links: [{ labelKey: "project.link.github", url: "https://github.com/Salas3108/Projet_Alom" }]
    }
  ];

  return (
    <PageTransition>
    <div className='home'>
      <PageTitle title={t('page.home')} />
      <section className='hero'>
        <div className='hero-content'>
          <motion.div
            className='hero-text'
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className='hero-title'>
              {t('home.hero.title')}
            </h1>
            <p className='hero-subtitle'>
              {t('home.hero.subtitle')}
            </p>
            <p className='hero-description'>
              {t('home.hero.description')}
            </p>
            <div className='cta-buttons'>
              <a href="mailto:salas.merzouk54@gmail.com" className='btn btn-primary'>
                {t('home.hero.cta1')}
                <ArrowRightIcon aria-hidden="true" />
              </a>
              <Link to="/projects" className='btn btn-secondary'>
                {t('home.hero.cta2')}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className='hero-visual'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='profile-container'>
              <img
                src="/assets/profile.jpg"
                alt="Salas Merzouk"
                className='profile-photo'
                loading="lazy"
              />
              <div className='profile-ring'></div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className='about-section'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className='about-header'>
          <h2>{t('home.about.title')}</h2>
        </div>
        <div className='about-content'>
          <div className='about-text'>
            <p>{t('home.about.p1')}</p>
            <p>{t('home.about.p2')}</p>
            <p>{t('home.about.p3')}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className='services-section'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className='section-header'>
          <h2>{t('home.services.title')}</h2>
          <p>{t('home.services.subtitle')}</p>
        </div>
        <motion.div
          className='services-grid'
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className='service-card' variants={fadeUp}>
            <div className='service-icon'>01</div>
            <h3>{t('home.services.fullstack')}</h3>
            <p>{t('home.services.fullstack.desc')}</p>
          </motion.div>
          <motion.div className='service-card' variants={fadeUp}>
            <div className='service-icon'>02</div>
            <h3>{t('home.services.microservices')}</h3>
            <p>{t('home.services.microservices.desc')}</p>
          </motion.div>
          <motion.div className='service-card' variants={fadeUp}>
            <div className='service-icon'>03</div>
            <h3>{t('home.services.ai')}</h3>
            <p>{t('home.services.ai.desc')}</p>
          </motion.div>
          <motion.div className='service-card' variants={fadeUp}>
            <div className='service-icon'>04</div>
            <h3>{t('home.services.devops')}</h3>
            <p>{t('home.services.devops.desc')}</p>
          </motion.div>
          <motion.div className='service-card' variants={fadeUp}>
            <div className='service-icon'>05</div>
            <h3>{t('home.services.performance')}</h3>
            <p>{t('home.services.performance.desc')}</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className='recent-work'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className='section-header'>
          <h2>{t('home.recent.title')}</h2>
          <p>{t('home.recent.subtitle')}</p>
        </div>
        <motion.div
          className='projects-grid'
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} className='project-card' variants={fadeUp}>
              {project.image && (
                <div className='project-image'>
                  <img src={project.image} alt={t(project.titleKey)} loading="lazy" />
                </div>
              )}
              <div className='card-header'>
                <h3>{t(project.titleKey)}</h3>
                <div className='card-number'>{String(index + 1).padStart(2, '0')}</div>
              </div>
              <p className='card-description'>{t(project.descKey)}</p>
              <div className='card-tags'>
                {project.tags.map((tag, i) => (
                  <span key={i} className='tag'>{tag}</span>
                ))}
              </div>
              <div className='card-links'>
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className='link-btn'>
                    {t(link.labelKey)}
                    <ArrowRightIcon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className='view-more'>
          <Link to="/projects" className='link-with-arrow'>
            {t('home.recent.viewAll')} <ArrowRightIcon aria-hidden="true" />
          </Link>
        </div>
      </motion.section>

      <motion.section
        className='final-cta'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <div className='cta-content'>
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.subtitle')}</p>
          <a href="mailto:salas.merzouk54@gmail.com" className='cta-button'>
            {t('home.cta.button')}
            <ArrowRightIcon />
          </a>
        </div>
      </motion.section>
    </div>
    </PageTransition>
  )
}

export default Home

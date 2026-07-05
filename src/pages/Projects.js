import React from 'react';
import ProjectItem from '../components/ProjectItem';
import PageTitle from '../components/PageTitle';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import Proj7 from "../assets/proj7.PNG";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.webp";
import Proj6 from "../assets/proj6.jpg";
import  "../styles/Projects.css";
import CiblOrgaSport from "../assets/ciblorgasport.png";
import GestionRestauration from "../assets/gestion-restauration.png";
import MessagerieMS from "../assets/messagerie-microservice.png";


function Projects() {
  const { t } = useLanguage();
  return (
    <PageTransition>
    <div className='projects'>
      <PageTitle title={t('page.projects')} />
      <h1 className='projectTitle'>{t('projects.title')}</h1>
      <div className='projectList'>
        <ProjectItem 
          name={t('projects.portfolio.name')} 
          image={Proj7} 
          description={t('projects.portfolio.desc')}
          githubLinks={[{ url: "https://github.com/Salas3108", label: t('project.link.githubProfile') }]}
        />

        <ProjectItem 
          name={t('projects.ciblorgasport.name')} 
          image={CiblOrgaSport}
          description={t('projects.ciblorgasport.desc')}
          githubLinks={[
            { url: "https://github.com/Salas3108/CiblOrgaSport_Front", label: t('project.link.frontend') },
            { url: "https://github.com/Salas3108/CiblOrgaSport_Back", label: t('project.link.backend') }
          ]}
        />

        <ProjectItem 
          name={t('projects.carshop.name')} 
          image={Proj4}
          description={t('projects.carshop.desc')} 
          githubLinks={[{ url: "https://github.com/Salas3108/SIAD.git", label: t('project.link.github') }]}
        />
        
        <ProjectItem 
          name={t('projects.collaborative.name')} 
          image={Proj5}
          description={t('projects.collaborative.desc')} 
          githubLinks={[{ url: "https://colab.research.google.com/drive/1xrwNVgHymYM7kyxmtKWnaXsV3wQvM8Zm#scrollTo=8Enlro4tDRW8", label: t('project.link.colab') }]}
        />

        <ProjectItem 
          name={t('projects.hybrid.name')} 
          image={Proj6}
          description={t('projects.hybrid.desc')} 
          githubLinks={[{ url: "https://github.com/Salas3108/Hybrid-Recommendation.git", label: t('project.link.github') }]}
        />

        <ProjectItem 
          name={t('projects.restaurant.name')} 
          image={GestionRestauration}
          description={t('projects.restaurant.desc')}
          githubLinks={[{ url: "https://github.com/ElsaLogier/projet-PAI.git", label: t('project.link.github') }]}
        />

        <ProjectItem 
          name={t('projects.messaging.name')} 
          image={MessagerieMS}
          description={t('projects.messaging.desc')}
          githubLinks={[{ url: "https://github.com/Salas3108/Projet_Alom", label: t('project.link.github') }]}
        />

      </div>
    </div>
    </PageTransition>
  );
}

export default Projects;

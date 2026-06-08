// Projects.js
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj7 from "../assets/proj7.PNG";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.webp";
import Proj6 from "../assets/proj6.jpg";
import  "../styles/Projects.css";


function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>  My Personal Projects </h1>
      <div className='projectList'>
        <ProjectItem 
          name="Portfolio" 
          image={Proj7} 
          description="This portfolio is a reflection of my journey as a web developer, showcasing my passion for crafting interactive and user-friendly websites. I built it entirely with React, taking advantage of its component-based architecture and dynamic nature."
          githubLinks={[{ url: "https://github.com/Salas3108", label: "GitHub Profile" }]}
        />

        <ProjectItem 
          name="CiblOrgaSport - Sports Management Platform" 
          image="/projects/ciblorgasport.png"
          description="A comprehensive sports organization platform for managing teams, schedules, and championships. Built with a modern tech stack featuring separate frontend and backend repositories for scalability."
          githubLinks={[
            { url: "https://github.com/Salas3108/CiblOrgaSport_Front", label: "Frontend" },
            { url: "https://github.com/Salas3108/CiblOrgaSport_Back", label: "Backend" }
          ]}
        />

        <ProjectItem 
          name="Online Car Shop with AI Price Prediction" 
          image={Proj4}
          description="An e-commerce platform for car sales featuring an AI model to predict car prices. Made using Mern Stack and FastAPI." 
          githubLinks={[{ url: "https://github.com/Salas3108/SIAD.git", label: "GitHub" }]}
        />
        
        <ProjectItem 
          name="Collaborative Filtering Recommender System" 
          image={Proj5}
          description="A recommender system that uses collaborative filtering to suggest items based on user similarity." 
          githubLinks={[{ url: "https://colab.research.google.com/drive/1xrwNVgHymYM7kyxmtKWnaXsV3wQvM8Zm#scrollTo=8Enlro4tDRW8", label: "Colab" }]}
        />

        <ProjectItem 
          name="Hybrid Recommender System" 
          image={Proj6}
          description="A recommender system that combines content-based and collaborative filtering techniques for more accurate recommendations." 
          githubLinks={[{ url: "https://github.com/Salas3108/Hybrid-Recommendation.git", label: "GitHub" }]}
        />

        <ProjectItem 
          name="Restaurant Management System" 
          image="/projects/restaurant.png"
          description="A complete restaurant management solution for handling reservations, menus, orders, and customer management. Designed for modern restaurant operations."
          githubLinks={[{ url: "https://github.com/ElsaLogier/projet-PAI.git", label: "GitHub" }]}
        />

        <ProjectItem 
          name="Microservices Messaging Platform" 
          image="/projects/microservices.png"
          description="A scalable messaging system built with microservices architecture. Enables real-time communication with multiple channels and professional-grade reliability."
          githubLinks={[{ url: "https://github.com/Salas3108/Projet_Alom", label: "GitHub" }]}
        />

      </div>
    </div>
  );
}

export default Projects;

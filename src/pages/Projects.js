// Projects.js
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Proj7 from "../assets/proj7.PNG";
import Proj4 from "../assets/proj4.webp";
import Proj5 from "../assets/proj5.webp";
import Proj6 from "../assets/proj6.jpg";
import  "../styles/Projects.css";
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>  My Personal Projects </h1>
      <div className='projectList'>
        <Link to="https://github.com/Salas3108">
          <ProjectItem 
            name="Portfolio" 
            image={Proj7} 
            description="This portfolio is a reflection of my journey as a web developer, showcasing my passion for crafting interactive and user-friendly websites. I built it entirely with React, taking advantage of its component-based architecture and dynamic nature." 
          />
        </Link>

        <Link to="https://github.com/Salas3108/SIAD.git">
          <ProjectItem 
            name="Online Car Shop with AI Price Prediction" 
            image={Proj4}
            description="An e-commerce platform for car sales featuring an AI model to predict car prices. Made using Mern Stack and FastAPI." 
          />
        </Link>
        
        <Link to="https://colab.research.google.com/drive/1xrwNVgHymYM7kyxmtKWnaXsV3wQvM8Zm#scrollTo=8Enlro4tDRW8">
          <ProjectItem 
            name="Collaborative Filtering Recommender System" 
            image={Proj5}
            description="A recommender system that uses collaborative filtering to suggest items based on user similarity." 
          />
        </Link>

        <Link to="https://github.com/Salas3108/Hybrid-Recommendation.git">
          <ProjectItem 
            name="Hybrid Recommender System" 
            image={Proj6}
            description="A recommender system that combines content-based and collaborative filtering techniques for more accurate recommendations." 
          />
        </Link>

      </div>
    </div>
  );
}

export default Projects;
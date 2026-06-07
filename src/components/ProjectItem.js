// ProjectItem.js
import React from 'react';

function ProjectItem({ image, name, description, githubLinks }) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className = "bgImage"></div>
        <h1> {name} </h1>
        <p className='project-description'>{description}</p>
        {githubLinks && githubLinks.length > 0 && (
          <div className='github-links'>
            {githubLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='github-link'
              >
                {link.label || 'GitHub'}
              </a>
            ))}
          </div>
        )}
    </div>
  );
}

export default ProjectItem;

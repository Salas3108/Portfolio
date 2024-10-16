// ProjectItem.js
import React from 'react';

function ProjectItem({ image, name, description }) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className = "bgImage"></div>
        <h1> {name} </h1>
        <p className='project-description'>{description}</p>
    </div>
  );
}

export default ProjectItem;
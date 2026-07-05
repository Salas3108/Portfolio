import React from 'react';

function ProjectItem({ image, name, description, githubLinks, alt }) {
  return (
    <div className='projectItem'>
        <img src={image} alt={alt || name} className="bgImage" />
        <h3> {name} </h3>
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

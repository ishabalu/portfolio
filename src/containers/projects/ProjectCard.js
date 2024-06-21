import React from 'react';
import './ProjectCard.css'; // Make sure to create this CSS file

const ProjectCard = ({ title, description, techIcons, githubRepoUrl }) => {
    console.log(githubRepoUrl)
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <div className="content">
        <p>{description}</p>
        <div className="tech-icons">
          {techIcons.map((icon, index) => (
            <img src={icon} alt="tech icon" key={index} width="500" height="300"/>
          ))}
        </div>
      </div>
      <a href={githubRepoUrl} className="icon-button github" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

export default ProjectCard;

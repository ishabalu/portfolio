import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsDisplay = () => {
  const projects = [
    {
      title: 'Grand File Sharing Application',
      description: 'Helps users to seamlessly upload and download files...',
      techIcons: ['path/to/python-icon.png', 'path/to/flask-icon.png', 'path/to/aws-icon.png'],
    },
    {
      title: 'Employee Turnover Prediction',
      description: 'Predicts employee turnover rates...',
      techIcons: ['path/to/ml-icon.png', 'path/to/analytics-icon.png'],
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsDisplay;

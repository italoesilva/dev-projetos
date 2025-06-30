import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>
      <p>{project.description}</p>
      <p><strong>Tecnologias:</strong> {project.technologies.join(', ')}</p>
    </div>
  );
}

export default ProjectCard;
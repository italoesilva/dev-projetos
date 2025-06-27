import React from 'react';

function ProjectCard({ project }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0077cc' }}>
          {project.title}
        </a>
      </h3>
      <p>{project.description}</p>
      <p><strong>Tecnologias:</strong> {project.technologies.join(', ')}</p>
    </div>
  );
}

export default ProjectCard;
import React from 'react';
import ProjectCard from './ProjectCard';

const projetos = [
  {
    title: 'Calculadora Simples',
    description: 'Uma calculadora básica feita em React.',
    technologies: ['React', 'JSX'],
    url: '#/calculadora',
  },
  {
    title: 'Lista de Tarefas',
    description: 'Gerencie suas tarefas com esta aplicação prática.',
    technologies: ['React', 'JSX', 'useState'],
    url: '#/tarefas',
  },
];

function Projetos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Projetos</h2>
      {projetos.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Projetos;
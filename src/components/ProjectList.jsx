import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectList() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Meus Projetos</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;
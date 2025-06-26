import { Link } from 'react-router-dom';

function ProjectList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Meus Projetos</h2>

      <div>
        <h3>
          <Link to="/calculadora" style={{ textDecoration: 'none', color: '#3c3c7c' }}>
            Calculadora Simples
          </Link>
        </h3>
        <p>Uma calculadora feita com HTML, CSS e JavaScript.</p>
      </div>

      <div>
        <h3>
          <Link to="/tarefas" style={{ textDecoration: 'none', color: '#3c3c7c' }}>
            Lista de Tarefas
          </Link>
        </h3>
        <p>App para organizar tarefas usando React.</p>
      </div>
    </div>
  );
}

export default ProjectList;
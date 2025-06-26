import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Ítalo Oliveira</h1>
        <p>Desenvolvedor Front-End em formação</p>
        <nav className="nav-links">
          <Link to="/">Projetos</Link>
          <Link to="/tarefas">Lista de Tarefas</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
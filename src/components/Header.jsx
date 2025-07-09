import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Ítalo Oliveira</h1>
        <p>Desenvolvedor Front-End</p>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
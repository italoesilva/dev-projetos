import React from 'react';
import './Sobre.css'; // Criaremos esse CSS logo abaixo

function Sobre() {
  return (
    <section className="sobre-container">
      <div className="foto-container">
        <img
          src='/italo.jpeg'
          alt="Foto de Ítalo Oliveira"
          className="foto-pessoal"
        />
      </div>
      <div className="info-container">
        <h2>Perfil Profissional</h2>
        <p>Confira meu currículo atualizado clicando no botão abaixo.</p>
        <a
          href="/curriculo.pdf" // coloque seu PDF na pasta public e ajuste o nome aqui
          target="_blank"
          rel="noopener noreferrer"
          className="btn-curriculo"
        >
          Ver Currículo
        </a>
      </div>
    </section>
  );
}

export default Sobre;
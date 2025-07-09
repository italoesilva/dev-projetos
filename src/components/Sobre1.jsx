import React from 'react';
import { motion } from 'framer-motion';
import './Sobre.css';

function Sobre1() {
  return (
    <section className="sobre-container">
      {/* Foto com flutuação */}
      <motion.div
        className="foto-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/italo.jpeg"
          alt="Foto de Ítalo Oliveira"
          className="foto-pessoal"
        />
      </motion.div>

      {/* Informações com animação */}
      <motion.div
        className="info-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Sobre Mim</h2>
        <p>Sou Ítalo, desenvolvedor front-end apaixonado por tecnologia, interfaces modernas e experiências incríveis.</p>
        
        <a
          href="/cv-italo.pdf" // ou o link do seu currículo
          className="btn-curriculo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Currículo
        </a>
      </motion.div>
    </section>
  );
}

export default Sobre1;
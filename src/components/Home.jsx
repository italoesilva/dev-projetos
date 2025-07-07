import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
    
      <Link to="/projetos" style={{ fontSize: '1.2rem', color: '#007bff', textDecoration: 'underline' }}>
        Projetos
      </Link>
    </div>
  );
}

export default Home;
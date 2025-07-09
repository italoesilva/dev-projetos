import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre1'; // Ou seu arquivo Sobre.jsx
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/calculadora" element={<Calculator />} />
            <Route path="/projetos/tarefas" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
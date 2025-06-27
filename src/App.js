import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Projetos from './components/Projetos';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/tarefas" element={<TodoList />} />
            <Route path="/calculadora" element={<Calculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
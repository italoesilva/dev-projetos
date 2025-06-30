import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ padding: '2rem' }}>
          <Sobre />
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

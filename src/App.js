import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import TodoList from './components/TodoList';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/tarefas" element={<TodoList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
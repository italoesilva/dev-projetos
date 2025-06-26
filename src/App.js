import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import TodoList from './components/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/tarefas" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
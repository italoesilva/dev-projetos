import { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="todo-container">
      <h2>📋 Lista de Tarefas</h2>
      <div className="todo-input">
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerTarefa(index)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
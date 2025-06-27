import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');   // valor que o usuário digita
  const [result, setResult] = useState(null);  // resultado da conta

  // Função para adicionar caracteres ao input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Função para limpar o input e resultado
  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  // Função para calcular o resultado da expressão
  const handleCalculate = () => {
    try {
      // Avalia a expressão usando eval (cuidado com uso real)
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2>Calculadora Simples</h2>
      <input
        type="text"
        value={input}
        placeholder="Digite a expressão"
        readOnly
        style={{ width: '100%', padding: '0.5rem', fontSize: '1.2rem', marginBottom: '0.5rem' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
        {[7,8,9,'/'].map((item) => (
          <button key={item} onClick={() => handleClick(item.toString())}>{item}</button>
        ))}
        {[4,5,6,'*'].map((item) => (
          <button key={item} onClick={() => handleClick(item.toString())}>{item}</button>
        ))}
        {[1,2,3,'-'].map((item) => (
          <button key={item} onClick={() => handleClick(item.toString())}>{item}</button>
        ))}
        {[0,'.','=','+'].map((item) => (
          item === '=' ? 
          <button key={item} onClick={handleCalculate}>=</button> :
          <button key={item} onClick={() => handleClick(item.toString())}>{item}</button>
        ))}
      </div>
      <button onClick={handleClear} style={{ width: '100%', padding: '0.5rem' }}>Limpar</button>

      {result !== null && (
        <div style={{ marginTop: '1rem', fontSize: '1.4rem' }}>
          Resultado: {result}
        </div>
      )}
    </div>
  );
}

export default Calculator;
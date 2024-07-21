import { useState } from 'react';
import axios from 'axios';

// Componente que realiza a soma de dois números
const SumComponent = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Função que pega os valores retornados pelo back-end e atualiza o estado
  const handleSum = async () => {
    const response = await axios.get(`http://0.0.0.0:8000/soma?num1=${num1}&num2=${num2}`);

    // Condição para verificar se a resposta do back-end contém um erro
    if (response.data.error !== undefined) {
      setError(response.data.error);
      setResult(null);
    }

    // Condição para verificar se a resposta do back-end contém a soma
    if (response.data.soma !== undefined) {
      setResult(response.data.soma); 
      setError(null);
    }
};

  // Estilos CSS para o componente

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  };

  const resultStyle = {
    marginTop: '20px',
    fontSize: '18px',
  };

  const errorStyle = {
    marginTop: '20px',
    fontSize: '18px',
    color: 'red',
  };

  return (
    <div style={containerStyle}>
      <h1>Calculadora de soma</h1>
      <input style={inputStyle}
        type="text"
        placeholder='Número 1'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input style={inputStyle}
        type="text"
        placeholder='Número 2'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleSum}>Calcular soma</button>
      {result !== null && <p style={resultStyle}>Resultado: {result}</p>}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  )
}

export default SumComponent;
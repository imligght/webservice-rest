import { useState } from 'react';
import axios from 'axios';

// Componente que realiza a soma de dois números
const SumComponent = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSum = async () => {
    const response = await axios.get(`http://0.0.0.0:8000/soma?num1=${num1}&num2=${num2}`);

    if (response.data.error !== undefined) {
      setError(response.data.error);
      setResult(null);
    }

    if (response.data.soma !== undefined) {
      setResult(response.data.soma); 
      setError(null);
    }
};

  return (
    <div>
      <h1>Calculadora de soma</h1>
      <input
        type="text"
        placeholder='Número 1'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder='Número 2'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleSum}>Calcular soma</button>
      {result !== null && <p>Resultado: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default SumComponent;
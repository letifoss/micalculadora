import './App.css';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
       alert('Por favor ingrese valores para realizar los cálculos');
    }
  }
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='titulo'>
          <h2>Calculadora</h2>
        </div>
        <div className='contenedor-calculadora'>
        <div className='pantalla'>
          <Pantalla input={input} />
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >1</Boton>
          <Boton manejarClick={agregarInput} >2</Boton>
          <Boton manejarClick={agregarInput} >3</Boton>
          <Boton manejarClick={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >4</Boton>
          <Boton manejarClick={agregarInput} >5</Boton>
          <Boton manejarClick={agregarInput} >6</Boton>
          <Boton manejarClick={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >7</Boton>
          <Boton manejarClick={agregarInput} >8</Boton>
          <Boton manejarClick={agregarInput} >9</Boton>
          <Boton manejarClick={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput} >0</Boton>
          <Boton manejarClick={agregarInput} >.</Boton>
          <Boton manejarClick={agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> CLEAR </BotonClear>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

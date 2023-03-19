import React, { useState } from 'react';
import './App.css';

function App() {
  const [equation, setEquation] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      setEquation(eval(equation));
    } else if (value === 'C') {
      setEquation('');
    } else {
      setEquation(equation + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="equation">{equation}</div>
        <div className="buttons">
        <div className="row">
            <button className="operation" onClick={() => handleClick('(')}>(</button>
            <button className="operation" onClick={() => handleClick(')')}>)</button>
            <button className="operation" onClick={() => handleClick('%')}>%</button>
            <button className="operation" onClick={() => handleClick('/')}>/</button>

          </div>
          <div className="row">
            <button onClick={() => handleClick(7)}>7</button>
            <button onClick={() => handleClick(8)}>8</button>
            <button onClick={() => handleClick(9)}>9</button>
            <button className="operation" onClick={() => handleClick('*')}>*</button>

          </div>
          <div className="row">
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <button onClick={() => handleClick(6)}>6</button>
            <button className="operation" onClick={() => handleClick('-')}>-</button>

          </div>
          <div className="row">
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button className="operation" onClick={() => handleClick('+')}>+</button>


          </div>
          <div className="row">
            <button className="operation" onClick={() => handleClick('C')}>C</button>
            <button onClick={() => handleClick(0)}>0</button>
            <button className="operation" onClick={() => handleClick(".")}>.</button>

            <button className="operation" onClick={() => handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 

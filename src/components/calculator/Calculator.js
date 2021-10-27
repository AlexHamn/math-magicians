import React, { useState } from 'react';
import '../../styles/Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const calc = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  let result;
  const { total, next } = state;
  if (next === null && total === null) {
    result = <div id="result">0</div>;
  } else if (next === null) {
    result = <div id="result">{total}</div>;
  } else {
    result = <div id="result">{next}</div>;
  }

  return (
    <div>
      <div id="calculator">
        {result}
        <div className="grid" id="mods">
          <button id="AC" onClick={calc} type="button">AC</button>
          <button id="+/-" onClick={calc} type="button">+/-</button>
          <button id="%" onClick={calc} type="button">%</button>
        </div>
        <div className="grid" id="ops">
          <button id="/" onClick={calc} type="button">÷</button>
          <button id="x" onClick={calc} type="button">x</button>
          <button id="-" onClick={calc} type="button">-</button>
          <button id="+" onClick={calc} type="button">+</button>
          <button id="=" onClick={calc} type="button">=</button>
        </div>
        <div className="grid" id="numbers">
          <button id="cero" onClick={calc} type="button">0</button>
          <button id="1" onClick={calc} type="button">1</button>
          <button id="2" onClick={calc} type="button">2</button>
          <button id="3" onClick={calc} type="button">3</button>
          <button id="4" onClick={calc} type="button">4</button>
          <button id="5" onClick={calc} type="button">5</button>
          <button id="6" onClick={calc} type="button">6</button>
          <button id="7" onClick={calc} type="button">7</button>
          <button id="8" onClick={calc} type="button">8</button>
          <button id="9" onClick={calc} type="button">9</button>
          <button id="." onClick={calc} type="button">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

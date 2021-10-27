import React from 'react';
import '../../styles/Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  calc = (e) => {
    this.setState((prev) => calculate(prev, e.target.innerText));
  };

  render() {
    let result;
    const { total, next } = this.state;
    if (next === null && total === null) {
      result = <div id="result">0</div>;
    } else if (next === null) {
      result = <div id="result">{total}</div>;
    } else {
      result = <div id="result">{next}</div>;
    }
    return (
      <>
        <div id="calculator">
          {result}
          <div className="grid" id="mods">
            <button id="AC" onClick={this.calc} type="button">AC</button>
            <button id="+/-" onClick={this.calc} type="button">+/-</button>
            <button id="%" onClick={this.calc} type="button">%</button>
          </div>
          <div className="grid" id="ops">
            <button id="/" onClick={this.calc} type="button">÷</button>
            <button id="x" onClick={this.calc} type="button">x</button>
            <button id="-" onClick={this.calc} type="button">-</button>
            <button id="+" onClick={this.calc} type="button">+</button>
            <button id="=" onClick={this.calc} type="button">=</button>
          </div>
          <div className="grid" id="numbers">
            <button id="cero" onClick={this.calc} type="button">0</button>
            <button id="1" onClick={this.calc} type="button">1</button>
            <button id="2" onClick={this.calc} type="button">2</button>
            <button id="3" onClick={this.calc} type="button">3</button>
            <button id="4" onClick={this.calc} type="button">4</button>
            <button id="5" onClick={this.calc} type="button">5</button>
            <button id="6" onClick={this.calc} type="button">6</button>
            <button id="7" onClick={this.calc} type="button">7</button>
            <button id="8" onClick={this.calc} type="button">8</button>
            <button id="9" onClick={this.calc} type="button">9</button>
            <button id="." onClick={this.calc} type="button">.</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;

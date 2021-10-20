import React from 'react';
import './Calculator.css';
// import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="grid">
          <div id="result"><p>TnT</p></div>
          <div className="grid" id="mods">
            <div id="AC"><button type="button">AC</button></div>
            <div id="+/-"><button type="button">+/-</button></div>
            <div id="%"><button type="button">%</button></div>
          </div>
          <div className="grid" id="ops">
            <div id="/"><button type="button">/</button></div>
            <div id="*"><button type="button">*</button></div>
            <div id="-"><button type="button">-</button></div>
            <div id="+"><button type="button">+</button></div>
            <div id="="><button type="button">=</button></div>
          </div>
          <div className="grid" id="numbers">
            <div id="cero"><button type="button">0</button></div>
            <div id="1"><button type="button">1</button></div>
            <div id="2"><button type="button">2</button></div>
            <div id="3"><button type="button">3</button></div>
            <div id="4"><button type="button">4</button></div>
            <div id="5"><button type="button">5</button></div>
            <div id="6"><button type="button">6</button></div>
            <div id="7"><button type="button">7</button></div>
            <div id="8"><button type="button">8</button></div>
            <div id="9"><button type="button">9</button></div>
            <div id="."><button type="button">.</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Header />
    <Navbar />
    <Switch>
      <Route exact path="/calculator">
        <Calculator />
      </Route>
    </Switch>
  </div>
);
export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';
import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Header />
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/calculator">
        <Calculator />
      </Route>
      <Route exact path="/quote">
        <Quote />
      </Route>
    </Switch>
  </div>
);
export default App;

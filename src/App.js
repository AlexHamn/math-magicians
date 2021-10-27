import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <header>
      <Header />
      <Navbar />
    </header>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/calculator">
        <CalculatorPage />
      </Route>
      <Route exact path="/quote">
        <Quote />
      </Route>
    </Switch>
    <Footer />
  </div>
);
export default App;

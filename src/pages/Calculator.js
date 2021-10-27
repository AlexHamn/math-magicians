import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
// import SinglePage from './SinglePage';

const Calculator = () => {
  console.log(useRouteMatch());
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>OwO</h2>
    </div>
  );
};
export default Calculator;

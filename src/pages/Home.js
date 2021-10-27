import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import SinglePage from './SinglePage';

const Quote = () => {
  console.log(useRouteMatch());
  // const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>OwO</h2>
    </div>
  );
};
export default Quote;

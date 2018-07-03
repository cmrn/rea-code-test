import React from 'react';
import cnames from 'classnames';
import Results from '../containers/Results';
import './App.css';

const App = ({className, ...props}) => (
  <div className={cnames('App', className)} {...props}>
    <Results />
  </div>
);

export default App;

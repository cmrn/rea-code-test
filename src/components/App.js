import React from 'react';
import cnames from 'classnames';
import Results from '../containers/Results';
import Saved from '../containers/Saved';
import './App.css';

const App = ({className, ...props}) => (
  <div className={cnames('App', className)} {...props}>
    <Results />
    <Saved />
  </div>
);

export default App;

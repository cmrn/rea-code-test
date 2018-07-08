import React from 'react';
import cnames from 'classnames';
import PropTypes from 'prop-types';
import Results from '../containers/Results';
import Saved from '../containers/Saved';
import './App.css';

const App = ({className, ...props}) => (
  <div className={cnames('App', className)} {...props}>
    <Results />
    <Saved />
  </div>
);

App.propTypes = {
  className: PropTypes.string
}

export default App;

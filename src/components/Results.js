import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';

const Results = ({results, ...props}) => (
  <div {...props}>
    <code>{JSON.stringify(results)}</code>
  </div>
);

Results.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Results;

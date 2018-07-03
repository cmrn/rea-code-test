import React from 'react';
import PropTypes from 'prop-types';
import Property from './Property';
import './Results.css';

const Results = ({results, ...props}) => (
  <div {...props}>
    <h2 className='Results-title'>Results</h2>
    {results.map(property => 
      <Property key={property.id} property={property} />
    )}
  </div>
);

Results.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Results;

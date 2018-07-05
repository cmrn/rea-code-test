import React from 'react';
import { view } from 'react-easy-state';
import Results from '../components/Results';
import propertyStore from '../propertyStore';

const ResultsContainer = (props) => (
  <Results 
    {...props} 
    propertyIds={propertyStore.results}
    onClick={(id) => propertyStore.save(id)}
  />
);

export default view(ResultsContainer);

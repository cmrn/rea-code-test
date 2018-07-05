import React from 'react';
import { view } from 'react-easy-state';
import PropertyList from '../components/PropertyList';
import propertyStore from '../propertyStore';

const Results = (props) => (
  <PropertyList 
    {...props} 
    propertyIds={propertyStore.results} 
    title='Results' 
    hoverContent={<div>Save</div>}
    onClick={(id) => propertyStore.save(id)}
  />
);

export default view(Results);

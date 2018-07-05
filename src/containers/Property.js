import React from 'react';
import { view } from 'react-easy-state';
import Property from '../components/Property';
import propertyStore from '../propertyStore';

const PropertyContainer = ({id, ...props}) => (
  <Property 
    {...props} 
    property={propertyStore.properties[id]}
  />
);

export default view(PropertyContainer);

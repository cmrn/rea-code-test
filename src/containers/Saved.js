import React from 'react';
import { view } from 'react-easy-state';
import PropertyList from '../components/PropertyList';
import propertyStore from '../propertyStore';

const Saved = (props) => (
  <PropertyList 
    {...props} 
    propertyIds={propertyStore.saved} 
    title='Saved Properties' 
    hoverContent={<div>Remove</div>}
    onClick={(id) => propertyStore.unsave(id)}
  />
);

export default view(Saved);

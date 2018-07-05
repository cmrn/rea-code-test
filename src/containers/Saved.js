import React from 'react';
import { view } from 'react-easy-state';
import Saved from '../components/Saved';
import propertyStore from '../propertyStore';

const SavedContainer = (props) => (
  <Saved 
    {...props} 
    propertyIds={propertyStore.saved}
    onClick={(id) => propertyStore.unsave(id)}
  />
);

export default view(SavedContainer);

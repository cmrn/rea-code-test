import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Property from '../components/Property';
import propertyStore from '../propertyStore';

const PropertyContainer = ({id, ...props}) => (
  <Property 
    {...props} 
    property={propertyStore.properties[id]}
  />
);

PropertyContainer.propTypes = {
  id: PropTypes.string.isRequired
};

export default view(PropertyContainer);

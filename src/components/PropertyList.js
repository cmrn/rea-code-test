import React from 'react';
import PropTypes from 'prop-types';
import Property from './Property';
import './PropertyList.css';

const PropertyList = ({properties, title, ...props}) => (
  <div {...props}>
    <h2 className='PropertyList-title'>{title}</h2>
    {properties.map(property => 
      <Property key={property.id} property={property} />
    )}
  </div>
);

PropertyList.propTypes = {
  properties: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default PropertyList;

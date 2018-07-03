import React from 'react';
import cnames from 'classnames';
import './Property.css';

const Property = ({property, className, ...props}) => (
  <div className={cnames('Property', className)} {...props}>
    <img className='Property-image' src={property.mainImage} />
    <div className='Property-price'>{property.price}</div>
  </div>
);

export default Property;

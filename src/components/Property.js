import React from 'react';
import cnames from 'classnames';
import './Property.css';

const AgencyBanner = ({color, logo}) => (
  <div className='AgencyBanner' style={{ backgroundColor: color }}>
    <img src={logo} />
  </div>
);

const Property = ({ property, className, hoverContent, onClick, ...props }) => (
  <div className={cnames('Property', className)} {...props}>
    <AgencyBanner logo={property.agency.logo} color={property.agency.brandingColors.primary} />
    <img className='Property-image' src={property.mainImage} />
    <div className='Property-price'>{property.price}</div>
    { hoverContent ? 
      <div className='Property-hover' onClick={() => { if(onClick) onClick(property.id) }}>
        {hoverContent}
      </div>
    : null }
  </div>
);

export default Property;

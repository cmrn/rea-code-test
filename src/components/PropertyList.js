import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import { view } from 'react-easy-state';
import Property from '../containers/Property';
import './PropertyList.css';

const PropertyList = ({propertyIds, title, hoverContent, onClick, className, ...props}) => (
  <div className={cnames('PropertyList', className)} {...props}>
    <h2 className='PropertyList-title'>{title}</h2>
    {propertyIds.map(propertyId => 
      <Property 
        key={propertyId} 
        id={propertyId}
        hoverContent={hoverContent}
        onClick={onClick}
      />
    )}
  </div>
);

PropertyList.propTypes = {
  propertyIds: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default view(PropertyList);

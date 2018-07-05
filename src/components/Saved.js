import React from 'react';
import RemoveIcon from 'react-icons/lib/md/clear';
import PropertyList from '../components/PropertyList';
import './Saved.css';

const Saved = (props) => (
  <PropertyList 
    {...props}
    title='Saved Properties' 
    hoverContent={
      <div className='Results-hover'>
        <RemoveIcon className='Results-hover-icon' />
        <div>Remove</div>
      </div>
    }
  />
);

export default Saved;

import React from 'react';
import AddIcon from 'react-icons/lib/md/add';
import PropertyList from '../components/PropertyList';
import './Results.css';

const Results = (props) => (
  <PropertyList 
    {...props}
    title='Results' 
    hoverContent={
      <div className='Results-hover'>
        <AddIcon className='Results-hover-icon' />
        <div>Save</div>
      </div>
    }
  />
);

export default Results;

import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import Results from './Results';
import propertyStore from '../propertyStore';

basicComponentTests(<Results />);

it('passes the results ID list from the store', async () => {
  const resultIds = ['1', '2', '3'];
  propertyStore.results = resultIds;
  const wrapper = shallow(<Results />);
  expect(wrapper.props().propertyIds).toEqual(resultIds);
});

it('sets the title prop to Results', () => {
  const wrapper = shallow(<Results />);
  expect(wrapper.update().props().title).toEqual('Results');
});
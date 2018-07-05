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
  expect(wrapper.props().title).toEqual('Results');
});

it('calls save method when a property is clicked', () => {
  propertyStore.save = jest.fn();
  const wrapper = shallow(<Results />);
  expect(propertyStore.save.mock.calls.length).toEqual(0);
  wrapper.simulate('click');
  expect(propertyStore.save.mock.calls.length).toEqual(1);
});
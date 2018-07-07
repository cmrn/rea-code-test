import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import Saved from './Saved';
import propertyStore from '../propertyStore';

basicComponentTests(<Saved />);

it('passes the results ID list from the store', async () => {
  const savedIds = ['1', '2', '3'];
  propertyStore.saved = savedIds;
  const wrapper = shallow(<Saved />);
  expect(wrapper.props().propertyIds).toEqual(savedIds);
});

it('calls unsave method when a property is clicked', () => {
  propertyStore.unsave = jest.fn();
  const wrapper = shallow(<Saved />);
  expect(propertyStore.unsave.mock.calls.length).toEqual(0);
  wrapper.simulate('click');
  expect(propertyStore.unsave.mock.calls.length).toEqual(1);
});
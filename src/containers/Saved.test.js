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

it('sets the title prop to Results', () => {
  const wrapper = shallow(<Saved />);
  expect(wrapper.update().props().title).toEqual('Saved Properties');
});
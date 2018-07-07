import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import App from './App';
import propertyStore from '../propertyStore';

beforeEach(() => {
  propertyStore.load = jest.fn();
});

basicComponentTests(<App />);

it('calls load on the propertyStore when mounted', () => {
  const wrapper = shallow(<App />);
  expect(propertyStore.load.mock.calls.length).toBe(1);
});

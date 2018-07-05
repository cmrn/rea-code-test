import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import App from './App';
import propertyStore from '../propertyStore';

beforeEach(() => {
  propertyStore.counters = {};
  propertyStore.load = jest.fn();
});

const counters = {
  asdf: {id: "asdf", title: "bob", count: 1},
  qwer: {id: "qwer", title: "steve", count: -1},
};

basicComponentTests(<App />);

it('calls load on the propertyStore when mounted', () => {
  const wrapper = shallow(<App />);
  expect(propertyStore.load.mock.calls.length).toBe(1);
});

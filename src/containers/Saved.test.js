import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import Saved from './Saved';

import * as api from '../api/api';

const data = [{
  "price": "$526,500",
  "agency": {
      "brandingColors": {
          "primary": "#000000"
      },
      "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
  },
  "id": "4",
  "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
}];

const dataPromise = Promise.resolve(data);

beforeEach(() => {
  api.getSavedProperties = jest.fn().mockImplementation(() => dataPromise);
});

basicComponentTests(<Saved />);

it('calls getSavedProperties on the API when mounted', () => {
  expect(api.getSavedProperties.mock.calls.length).toBe(0);
  shallow(<Saved />);
  expect(api.getSavedProperties.mock.calls.length).toBe(1);
});

it('passes an empty properties array before api promise resolves', () => {
  const wrapper = shallow(<Saved />);
  expect(wrapper.props().properties).toEqual([]);
});

it('passes the saved properties array after api promise resolves', async () => {
  const wrapper = shallow(<Saved />);
  await dataPromise; 
  expect(wrapper.update().props().properties).toEqual(data);
});

it('sets the title prop to "Saved Properties"', () => {
  const wrapper = shallow(<Saved />);
  expect(wrapper.update().props().title).toEqual('Saved Properties');
});
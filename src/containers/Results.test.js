import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow, mount } from 'enzyme';
import Results from './Results';

import * as api from '../api/api';

const data = [{
  "price": "$726,500",
  "agency": {
      "brandingColors": {
          "primary": "#ffe512"
      },
      "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
  },
  "id": "1",
  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
}, {
  "price": "$560,520",
  "agency": {
      "brandingColors": {
          "primary": "#fcfa3b"
      },
      "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
  },
  "id": "2",
  "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
}];

const dataPromise = Promise.resolve(data);

beforeEach(() => {
  api.getResults = jest.fn().mockImplementation(() => dataPromise);
});

basicComponentTests(<Results />);

it('calls getResults on the API when mounted', () => {
  expect(api.getResults.mock.calls.length).toBe(0);
  shallow(<Results />);
  expect(api.getResults.mock.calls.length).toBe(1);
});

it('passes an empty results array before api promise resolves', () => {
  const wrapper = shallow(<Results />);
  expect(wrapper.props().properties).toEqual([]);
});

it('passes the results list after api promise resolves', async () => {
  const wrapper = shallow(<Results />);
  await dataPromise; 
  expect(wrapper.update().props().properties).toEqual(data);
});

it('sets the title prop to Results', () => {
  const wrapper = shallow(<Results />);
  expect(wrapper.update().props().title).toEqual('Results');
});
import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import Property from './Property';

const property = {
  "price": "$726,500",
  "agency": {
      "brandingColors": {
          "primary": "#ffe512"
      },
      "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
  },
  "id": "1",
  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
};

basicComponentTests(<Property property={property} />);

it('renders the property with image, agency, and price', () => {
  const wrapper = shallow(<Property property={property} />);
  expect(wrapper).toMatchSnapshot();
});
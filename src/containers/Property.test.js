import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import Property from './Property';
import propertyStore from '../propertyStore';

beforeEach(() => {
  propertyStore.properties = {
    asdf: {
	  "id": "asdf",
	  "price": "$726,500",
	  "agency": {
	      "brandingColors": {
	          "primary": "#ffe512"
	      },
	      "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
	  },
	  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
	},
    qwer: {
	  "id": "qwer",
	  "price": "$726,500",
	  "agency": {
	      "brandingColors": {
	          "primary": "#ffe512"
	      },
	      "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
	  },
	  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
	},
  };
});

const dummyProps = {
  id: 'asdf'
}

basicComponentTests(<Property {...dummyProps} />);

it('passes in the property with the given ID', () => {
  const wrapper = shallow(<Property id='asdf' />);
  expect(wrapper.props().property).toEqual(propertyStore.properties['asdf']);
});

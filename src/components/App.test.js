import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import App from './App';

basicComponentTests(<App />);

it('renders the app with Results and Saved components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

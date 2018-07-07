import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import Saved from './Saved';

const dummyProps = {
  propertyIds: []
};

basicComponentTests(<Saved {...dummyProps} />);

it('sets title and hover content as expected', () => {
  const wrapper = shallow(<Saved {...dummyProps} />);
  expect(wrapper).toMatchSnapshot();
});
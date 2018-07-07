import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import Results from './Results';

const dummyProps = {
  propertyIds: []
};

basicComponentTests(<Results {...dummyProps} />);

it('sets title and hover content as expected', () => {
  const wrapper = shallow(<Results {...dummyProps} />);
  expect(wrapper).toMatchSnapshot();
});

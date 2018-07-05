import React from 'react';
import basicComponentTests from '../basicComponentTests';
import { shallow } from 'enzyme';
import PropertyList from './PropertyList';

const dummyProps = {
  propertyIds: [],
  title: '',
};

basicComponentTests(<PropertyList {...dummyProps} />);

it('renders list title', () => {
  const wrapper = shallow(<PropertyList {...dummyProps} title='Something' />);
  expect(wrapper.find('h2').text()).toEqual('Something');
});

describe('with no properties', () => {
  it('renders no properties', () => {
    const wrapper = shallow(<PropertyList {...dummyProps} propertyIds={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('with some properties', () => {
  it('renders each property', () => {
    const wrapper = shallow(<PropertyList {...dummyProps} propertyIds={['1', '2', '3']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
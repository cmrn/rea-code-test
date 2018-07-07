import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import Property from './Property';
import propertyStore from '../propertyStore';

beforeEach(() => {
  propertyStore.properties = {
    asdf: {id: "asdf", title: "bob", count: 1},
    qwer: {id: "qwer", title: "steve", count: -1},
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

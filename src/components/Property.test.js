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

const dummyProps = {
  property: property,
}

basicComponentTests(<Property {...dummyProps} />);

it('renders the property with image, agency, and price', () => {
  const wrapper = shallow(<Property {...dummyProps} />);
  expect(wrapper).toMatchSnapshot();
});

describe('when hover content is provided', () => {
  it('renders the hover div with content', () => {
    const wrapper = shallow(<Property {...dummyProps}  hoverContent='something' />);
    expect(wrapper.find('.Property-hover').length).toEqual(1);
    expect(wrapper.find('.Property-hover').text()).toEqual('something');
  });

  describe('and a click handler is provided', () => {
    it('calls the click handler when hover is clicked', () => {
      const clickHandler = jest.fn();
      const wrapper = shallow(<Property {...dummyProps} hoverContent='something' onClick={clickHandler} />);
      wrapper.find('.Property-hover').simulate('click');
      expect(clickHandler.mock.calls.length).toEqual(1);
    });
  });

  describe('but no click handler', () => {
    it('does not error when clicked', () => {
      const wrapper = shallow(<Property {...dummyProps} hoverContent='something' />);
      wrapper.find('.Property-hover').simulate('click');
    });
  });
});

describe('when there is no hover content', () => {
  it('does not render render the hover div', () => {
    const wrapper = shallow(<Property {...dummyProps} />);
    expect(wrapper.find('.Property-hover').length).toEqual(0);
  });
});
// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

const setup = (setupProps = {}) => {
  const store = configureStore()();
  const wrapper = shallow(<Footer store={store} />);

  return {
    store,
    wrapper
  };
};

describe('Footer', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

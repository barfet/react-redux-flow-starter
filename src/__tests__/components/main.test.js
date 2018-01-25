// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from '../../components/Main';

Enzyme.configure({ adapter: new Adapter() });

const setup = (setupProps = {}) => {
  const store = configureStore()();
  const wrapper = shallow(<Main store={store} />);

  return {
    store,
    wrapper
  };
};

describe('Main', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

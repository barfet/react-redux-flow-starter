// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import Main from './components/Main';

export type Props = {
  store: Store
};

const App = ({ store }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={Main} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import './index.css';
import App from './App';
import type { State } from './types';
import { loadItem, saveItem } from './modules/localStorage';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadItem('state');
const store: Store<State> = configureStore(persistedState);

store.subscribe(throttle(() => {
    saveItem('state', store.getState());
}, 1000));

ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import './index.css';
import App from './App';
import { loadItem, saveItem } from './modules/localStorage';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadItem('state');
const store: Store<State> = configureStore(persistedState);

store.subscribe(throttle(() => {
    const companyData: CompanyData = store.getState().companyData;
    saveItem('state', companyData);
}, 1000));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

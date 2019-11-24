import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './scripts/redux/index';
import App from './scripts/loan-calculator/loan.app';

const rootElement = document.getElementById('index');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

module.hot.accept();

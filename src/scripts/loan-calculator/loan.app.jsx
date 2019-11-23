import React from 'react';
import store from '../redux';
import { Provider } from 'react-redux';
import LoacCalculatorContainer from './loan.calulator.container';
class Account extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoacCalculatorContainer />
      </Provider>
    );
  }
}

export default Account;

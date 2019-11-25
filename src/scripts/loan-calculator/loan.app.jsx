import React from 'react';
import store from '../redux';
import { Provider } from 'react-redux';
import LoanCalculatorContainer from './loan.calulator.container';
import '../../css/main.css';
class LoanApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoanCalculatorContainer />
      </Provider>
    );
  }
}

export default LoanApp;

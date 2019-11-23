import { combineReducers } from 'redux';
import loanCalculator from '../loan-calculator/reducers';

const rootReducer = combineReducers({
  loanCalculator
});

export default rootReducer;

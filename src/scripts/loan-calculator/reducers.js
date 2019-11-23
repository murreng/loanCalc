import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { types } from './actions';

const defaultContent = {};

const loanCalculator = handleActions(
  {
    [types.DO_STUFF](state) {
      return { ...state, stuff: 'hello' };
    }
  },
  {
    stuff: null
  }
);

const reducers = combineReducers({
  loanCalculator
});

export default reducers;

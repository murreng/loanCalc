import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { types } from './actions';
import content from '../../CMSPayloads/content.json';

const defaultContent = content;

const loanCalculator = handleActions(
  {
    [types.DO_STUFF](state) {
      return { ...state, stuff: 'hello' };
    }
  },
  {
    stuff: null,
    content: {...defaultContent}
  }
);

const reducers = combineReducers({
  loanCalculator
});

export default reducers;

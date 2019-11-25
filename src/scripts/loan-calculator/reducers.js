import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { types } from './actions';
import content from '../../CMSPayloads/content.json';

const defaultContent = content;

const loanCalculator = handleActions(
  {
    [types.UPDATE_INTEREST_RATE](state, { payload }) {
      return {
        ...state,
        products: { ...state.products, ...payload }
      };
    },
    [types.UPDATE_AMOUNT](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    [types.UPDATE_DURATION](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    [types.SET_PRODUCT_DATA](state, { payload }) {
      return {
        ...state,
        products: { ...state.products, ...payload }
      };
    }
  },
  {
    content: { ...defaultContent },
    amount: 0,
    duration: 0,
    products: {
      rcf: 0,
      bl: 0,
      data: null
    }
  }
);

const reducers = combineReducers({
  loanCalculator
});

export default reducers;

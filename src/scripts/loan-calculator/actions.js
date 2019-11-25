import { createActions } from 'redux-actions';

const types = {
  REQ_GET_LOAN_DATA: 'REQ_GET_LOAN_DATA',
  UPDATE_AMOUNT: 'UPDATE_AMOUNT',
  UPDATE_DURATION: 'UPDATE_DURATION',
  GET_PRODUCT_DATA: 'GET_PRODUCT_DATA',
  SET_PRODUCT_DATA: 'SET_PRODUCT_DATA'
};

const actions = createActions(...Object.keys(types).map(type => types[type]));

export default actions;
export { types };

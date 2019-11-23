import { createActions } from 'redux-actions';

const types = {
  DO_STUFF: 'DO_STUFF',
  REQ_GET_LOAN_DATA: 'REQ_GET_LOAN_DATA'
};

const actions = createActions(...Object.keys(types).map(type => types[type]));

export default actions;
export { types };

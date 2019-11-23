import { all } from 'redux-saga/effects';

import loanCalculator from '../loan-calculator/sagas';

function* sagas() {
  yield all([
    loanCalculator()
  ]);
}

export default sagas;

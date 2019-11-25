import { all, put, call, takeEvery } from 'redux-saga/effects';
import actions, { types } from './actions';
import { apiEndpoint } from '../api';

export function* getProductData() {
  try {
    const json = yield fetch(apiEndpoint).then(response => response.json());
    yield put(actions.setProductData({ data: json }));
  } catch (err) {
    // do something
  }
}

function* watchAlerts() {
  yield takeEvery(types.GET_PRODUCT_DATA, getProductData);
}

function* sagas() {
  yield all([watchAlerts()]);
}

export default sagas;

import { all, put, call, takeEvery } from 'redux-saga/effects';
import actions, { types } from './actions';

export function* getProductData() {
  try {
    const json = yield fetch('http://www.mocky.io/v2/5d4aa9e93300006f000f5ea9')
    .then(response => response.json(),);
    /*const { Data } = yield call(api.getHolidayHomeAlert, {});
    if (Data) yield put(actions.resGetHolidayHomesAlert({ exists: true, alert: { ...Data } }));*/
    yield put(actions.setProductData({ data: json }));
    const greg = 'hi';
  } catch (err) {
    //yield put(actions.errGetHolidayHomesAlert(err));
  }
}

function* watchAlerts() {
  yield takeEvery(types.GET_PRODUCT_DATA, getProductData);
}

function* sagas() {
  yield all([watchAlerts()]);
}

export default sagas;

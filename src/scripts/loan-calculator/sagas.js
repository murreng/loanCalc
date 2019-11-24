import { all, put, call, takeEvery } from 'redux-saga/effects';
import actions, { types } from './actions';

export function* getHolidayHomesAlert() {
  try {
    /*const { Data } = yield call(api.getHolidayHomeAlert, {});
    if (Data) yield put(actions.resGetHolidayHomesAlert({ exists: true, alert: { ...Data } }));
    else yield put(actions.toggleHolidayHomesAlertExists({ exists: false }));*/
    const greg = 'hi';
  } catch (err) {
    //yield put(actions.errGetHolidayHomesAlert(err));
  }
}

function* watchAlerts() {
  yield takeEvery(types.REQ_GET_LOAN_DATA, getHolidayHomesAlert);
}

function* sagas() {
  yield all([watchAlerts()]);
}

export default sagas;

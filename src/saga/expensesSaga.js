import {RECEIVED_EXPENSES} from '../redux/actions/actionTypes';
import {call, put, all} from 'redux-saga/effects';
import {retrieveItem} from '../services/storage';
import {fetchExchangeRate} from '../services/api';

import {receivedExchangeRate} from '../redux/actions/expenseActions';

export function* getExpensesAsync() {
  const expenses = yield call(() => new retrieveItem('expenses'));

  yield put({type: RECEIVED_EXPENSES, payload: JSON.parse(expenses) || []});
}

function* getExchangeRateAsync() {
  try {
    // do api call
    const data = yield call(fetchExchangeRate);
    console.log('calling api' + data);
    yield put(receivedExchangeRate(data));
  } catch (e) {
    console.log(e);
  }
}

export function* rootSaga() {
  yield all([getExpensesAsync(), getExchangeRateAsync()]);
}

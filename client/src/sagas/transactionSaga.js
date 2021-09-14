import { put } from '@redux-saga/core/effects';
import {
  getTransactionsError,
  getTransactionsRequest,
  getTransactionsSuccess,
} from '../actions/actionCreator';
import * as API from '../api/rest/restController';

function * transactionSaga () {
  yield put(getTransactionsRequest());
  try {
    const { data } = yield API.getTransactions();
    yield put(getTransactionsSuccess(data));
  } catch (e) {
    yield put(getTransactionsError(e));
  }
}

export default transactionSaga;

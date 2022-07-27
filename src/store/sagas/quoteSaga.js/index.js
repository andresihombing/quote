import { call, put, takeLatest } from  'redux-saga/effects';
import { ActionTypes } from '../../constants';
import { getQuoteApi } from '../../../service/quote';
import { setQuote } from '../../actions/quoteAction';

function* quoteSaga() {
  try {
    const quote = yield call(getQuoteApi);
    yield put(setQuote(quote))
  } catch (error) {
    console.log(error)
  }
}

export default function* quote() {
  yield takeLatest(ActionTypes.GET_QUOTE, quoteSaga);
};

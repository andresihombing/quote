import { all } from 'redux-saga/effects';
import quote from './quoteSaga.js/index.js';

export default function* rootSaga() {
  yield all([
    quote(),
  ])
}
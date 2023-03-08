import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./authSaga";
import { watchGetHotelsSaga } from "./hotelsSaga";

// eslint-disable-next-line import/prefer-default-export
export default function* rootSaga() {
  yield all([watchGetHotelsSaga(), watchAuthSaga()]);
}

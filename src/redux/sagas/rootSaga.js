import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./authSaga";
import { watchGetHotelsSaga } from "./hotelsSaga";

export default function* rootSaga() {
  yield all([watchGetHotelsSaga(), watchAuthSaga()]);
}

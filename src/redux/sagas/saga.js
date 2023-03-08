import { takeEvery, put, call } from "redux-saga/effects";
import { getHotelItems } from "../../api/api";
import { GET_HOTELS_DATA, setHotelsData } from "../HotelReducer";

export function* handleHotelsData(action) {
  const { location, checkIn, checkOut } = action.payload;

  const data = yield call(getHotelItems, location, checkIn, checkOut);
  yield put(setHotelsData(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_HOTELS_DATA, handleHotelsData);
}

export function* rootSaga() {
  yield watchClickSaga();
}

import { takeEvery, put, call } from "redux-saga/effects";
import getHotelItems from "../../api/api";
import { GET_HOTELS_DATA, setHotelsData } from "../HotelReducer";
import { setHotelsError } from "../HotelErrorRuducer";

export function* handleHotelsData(action) {
  const { location, checkIn, checkOut } = action.payload;
  try {
    const data = yield call(getHotelItems, location, checkIn, checkOut);
    yield put(setHotelsData(data));
    yield put(setHotelsError(""));
  } catch {
    yield put(setHotelsError("По вашему запросу отели не найдены"));
  }
}

export function* watchGetHotelsSaga() {
  yield takeEvery(GET_HOTELS_DATA, handleHotelsData);
}

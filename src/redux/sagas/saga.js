import {takeEvery, put, call} from 'redux-saga/effects';
import { SET_LOGIN } from '../AuthReducer';
import { getHotelItems } from '../../api/api';
import { GET_HOTELS_DATA, setHotelsData, SET_HOTELS_DATA } from '../HotelReducer';


export function* handleHotelsData () {
    const data = yield call(getHotelItems);
    yield put(setHotelsData(data));
}

export function* watchClickSaga () {
    yield takeEvery(GET_HOTELS_DATA, handleHotelsData);

}

export function* rootSaga () {
    yield watchClickSaga();
}
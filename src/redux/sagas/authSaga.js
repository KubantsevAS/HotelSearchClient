import { takeEvery } from "redux-saga/effects";
import { SET_LOGIN, SET_LOGOUT } from "../AuthReducer";

export function* handleLogIn() {
  yield localStorage.setItem("auth", true);
}

export function* handleLogOut() {
  yield localStorage.setItem("auth", false);
}

export function* watchAuthSaga() {
  yield takeEvery(SET_LOGIN, handleLogIn);
  yield takeEvery(SET_LOGOUT, handleLogOut);
}

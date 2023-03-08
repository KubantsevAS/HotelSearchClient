import { takeEvery } from "redux-saga/effects";
import { SET_LOGIN, SET_LOGOUT } from "../AuthReducer";

// eslint-disable-next-line require-yield
export function* handleLogIn() {
  localStorage.setItem("auth", true);
}

// eslint-disable-next-line require-yield
export function* handleLogOut() {
  localStorage.setItem("auth", false);
}

export function* watchAuthSaga() {
  yield takeEvery(SET_LOGIN, handleLogIn);
  yield takeEvery(SET_LOGOUT, handleLogOut);
}

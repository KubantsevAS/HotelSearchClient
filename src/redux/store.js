import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import HotelReducer from "./HotelReducer";

import AuthReducer from "./AuthReducer";
import LikedListReducer from "./LikedListReducer";
import rootSaga from "./sagas/rootSaga";

const SagaMiddleware = createSagaMiddleware({});

const reducer = combineReducers({
  AuthReducer,
  HotelReducer,
  LikedListReducer,
});

// eslint-disable-next-line no-undef
const userInfoFromStorage = localStorage.getItem("auth")
  ? // eslint-disable-next-line no-undef
    JSON.parse(localStorage.getItem("auth"))
  : null;

const initialState = {
  reducer: {
    AuthReducer: { auth: userInfoFromStorage },
  },
};

const store = configureStore({
  reducer: {
    reducer,
  },
  preloadedState: initialState,
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;

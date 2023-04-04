import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import HotelReducer from "./HotelReducer";
import HotelErrorReducer from "./HotelErrorRuducer";
import AuthReducer from "./AuthReducer";
import LikedListReducer from "./LikedListReducer";
import rootSaga from "./sagas/rootSaga";

const SagaMiddleware = createSagaMiddleware({});

const reducer = combineReducers({
  AuthReducer,
  HotelReducer,
  LikedListReducer,
  HotelErrorReducer,
});

const userInfoFromStorage = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
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

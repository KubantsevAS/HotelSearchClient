import { configureStore } from '@reduxjs/toolkit'
import HotelReducer from './HotelReducer'
import AuthReducer from './AuthReducer'
import LikedListReducer from './LikedListReducer';
import { combineReducers } from "redux";
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/saga';

const SagaMiddleware = createSagaMiddleware({

});

const reducer = combineReducers ({
    AuthReducer,
    HotelReducer,
    LikedListReducer,
});

export const store = configureStore ({
    reducer: {
        reducer,
    },
    middleware: [
        SagaMiddleware
    ]
})


SagaMiddleware.run(rootSaga);

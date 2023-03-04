import { configureStore } from '@reduxjs/toolkit'
import HotelReducer from './HotelReducer'
import AuthReducer from './AuthReducer'
import { combineReducers } from "redux";

const reducer = combineReducers ({
    AuthReducer,
});

export const store = configureStore ({
    reducer: {
        reducer,
    }
})


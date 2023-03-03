import { configureStore } from "@reduxjs/toolkit";
import HotelReducer from './HotelReducer'
import AuthReducer from './AuthReducer'


const store = configureStore ({
    reducer: {
        hotelPage: HotelReducer,
        authPage: AuthReducer
    }
})
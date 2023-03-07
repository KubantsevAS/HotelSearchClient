import moment from "moment"

export const SET_HOTELS_DATA = 'hotel/SET_HOTELS_DATA'
export const GET_HOTELS_DATA = 'hotel/GET_HOTELS_DATA'
export const LIKE = 'hotel/LIKE'


const initialState = {
    hotels: [],
    checkIn: moment().format('YYYY-MM-DD'),
    checkOut: moment().add(1, 'days').format('YYYY-MM-DD'),
    location: 'Москва',
    likedId: [],
}

const HotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOTELS_DATA:
            return {
                ...state,
                hotels: [...action.payload.data],
                checkIn: action.payload.checkIn,
                checkOut: action.payload.checkOut,
                location: action.payload.location
            }
        case LIKE:
            return {
                ...state,
                likedId: [...state.likedId, action.payload]
            }
        default: 
            return state
    }
}


// ACTION CREATORS

export const getHotelsData = (payload) => ({type: GET_HOTELS_DATA, payload})

export const setHotelsData = (payload) => ({type: SET_HOTELS_DATA, payload})

export const likeHotel = (payload) => ({type: LIKE, payload})

export default HotelReducer;
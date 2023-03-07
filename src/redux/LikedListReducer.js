const ADD_TO_LIST = 'liked/ADD_TO_LIST';
const REMOVE_FROM_LIST = 'liked/REMOVE_FROM_LIST';

const initialState = {
    hotelsData: [],
}

const LikedListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_LIST:
            return {...state, 
                hotelsData: [...state.hotelsData, action.payload]};
        case REMOVE_FROM_LIST:
            return {...state, 
                hotelsData: state.hotelsData.filter(item => item.hotelId !== action.payload)};
        default:
            return state;
    }
}

// ACTION CREATORS

export const addNewHotel = (payload) => ({type: ADD_TO_LIST, payload});

export const removeFromLikedList = (payload) => ({type: REMOVE_FROM_LIST, payload})

export default LikedListReducer;
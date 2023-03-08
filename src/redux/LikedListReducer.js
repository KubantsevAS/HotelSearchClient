const ADD_TO_LIST = 'liked/ADD_TO_LIST';
const REMOVE_FROM_LIST = 'liked/REMOVE_FROM_LIST';
const SORT_LIST_BY_STARS_UP = 'liked/SORT_LIST_BY_STARS_UP'
const SORT_LIST_BY_STARS_DOWN = 'liked/SORT_LIST_BY_STARS_DOWN'

const initialState = {
    hotelsData: [],
}

const LikedListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_LIST:
            return {
                ...state,
                hotelsData: [...state.hotelsData, action.payload]
            };
        case REMOVE_FROM_LIST:
            return {
                ...state,
                hotelsData: [...state.hotelsData.filter(item => item.hotelId !== action.payload)]
            };
        case SORT_LIST_BY_STARS_UP:
            return {
                ...state,
                hotelsData: [...state.hotelsData.sort((a, b) => a.stars > b.stars ? -1 : 1)]
            }
        case SORT_LIST_BY_STARS_DOWN:
            return {
                ...state,
                hotelsData: [...state.hotelsData.sort((a, b) => a.stars < b.stars ? -1 : 1)]
            }
        default:
            return state;
    }
}

// ACTION CREATORS

export const addNewHotel = (payload) => ({ type: ADD_TO_LIST, payload });

export const removeFromLikedList = (payload) => ({ type: REMOVE_FROM_LIST, payload })

export const sortListByStarsUp = () => ({ type: SORT_LIST_BY_STARS_UP })

export const sortListByStarsDown = () => ({ type: SORT_LIST_BY_STARS_DOWN })

export default LikedListReducer;
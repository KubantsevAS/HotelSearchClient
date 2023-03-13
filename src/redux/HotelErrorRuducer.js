/* eslint-disable default-param-last */
/* eslint-disable no-debugger */
export const SET_HOTELS_ERROR = "error/SET_HOTELS_ERROR";

const initialState = {
  errorMsg: "",
};

const HotelErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export const setHotelsError = (payload) => ({
  type: SET_HOTELS_ERROR,
  payload,
});

export default HotelErrorReducer;

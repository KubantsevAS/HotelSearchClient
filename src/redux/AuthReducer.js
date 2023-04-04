export const SET_LOGIN = "auth/SET_LOGIN";
export const SET_LOGOUT = "auth/SET_LOGOUT";

const AuthReducer = (action, state = { auth: false }) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, auth: true };
    case SET_LOGOUT:
      return { ...state, auth: false };
    default:
      return state;
  }
};

// ACTION CREATORS

export const setLogin = () => ({ type: SET_LOGIN });
export const setLogout = () => ({ type: SET_LOGOUT });

export default AuthReducer;

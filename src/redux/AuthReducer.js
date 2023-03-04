const SET_LOGIN = 'auth/SET_LOGIN'

const AuthReducer = (state = {auth: false}, action) => {
    switch(action.type) {
        case SET_LOGIN:
            return {...state, auth: true};
        default:
            return state
    }
}


// ACTION CREATORS

export const setLogin = () => ({type: SET_LOGIN})

export default AuthReducer;

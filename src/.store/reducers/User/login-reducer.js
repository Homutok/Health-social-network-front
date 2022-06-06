import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_CHECK,
    LOGIN_CHECK_ERROR,
    LOGIN_CONFIRM,
    LOGIN_REFRESH,
    LOGOUT
} from "../../actions/User/LoginInfoActions"

let initalState = {
    profileInfo: [],
    isAuthData: {
        isAuth: false,
        errors: null,
        loadAuth: false
    },
    isLoaded: false,
}
const loginReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('login')
            localStorage.setItem('refresh', action.payload.refresh)
            localStorage.setItem('access', action.payload.access)
            return { ...state, isAuthData: { ...action.payload, isAuth: true, errors: null, loadAuth: true } };
        case LOGIN_ERROR:
            return { ...state, isAuthData: { ...action.payload, isAuth: false, loadAuth: false } };
        case LOGIN_REFRESH:
            console.log('refresh')
            localStorage.setItem('refresh', action.payload.refresh)
            localStorage.setItem('access', action.payload.access)
            return { ...state, isAuthData: { ...action.payload, isAuth: true, errors: null } };
        case LOGIN_CHECK:
            console.log('check')
            return {
                ...state, isAuthData: {
                    refresh: localStorage.getItem('refresh'),
                    access: localStorage.getItem('access'),
                    isAuth: true,
                    errors: null,
                    loadAuth: true
                },
                isLoaded: true
            }
        case LOGIN_CHECK_ERROR:
            console.log('check_error')
            return { ...state, isAuthData: { ...action.payload, isAuth: false, loadAuth: false } };
        case LOGIN_CONFIRM:
            console.log('confirm')
            return { ...state, isAuthData: { ...state.isAuthData, loadAuth: true } };
        case LOGOUT:
            console.log('exit')
            localStorage.clear();
            return { ...state, isAuthData: { isAuth: false, errors: null, loadAuth: false } };
        default:
            return state;
    }
}
export default loginReducer;
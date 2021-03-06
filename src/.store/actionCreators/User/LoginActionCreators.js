import {
    REGISTER,
    REGISTER_CONFIRM,
    REGISTER_ERROR,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_CONFIRM,
    LOGIN_CHECK,
    LOGIN_CHECK_ERROR,
    LOGIN_REFRESH,
    LOGOUT
} from "../../actions/User/LoginInfoActions"

export const loginUsersSuccess = (data) => ({
    type: LOGIN,
    payload: {
        refresh: data.refresh,
        access: data.access
    }
})

export const verifyUsersSuccess = (data) => ({
    type: LOGIN_CHECK,
    payload: data
})

export const refreshUsersToken = (data) => ({
    type: LOGIN_REFRESH,
    payload: {
        refresh: data.refresh,
        access: data.access
    }
})

export const verifyUsersError = (error) => ({
    type: LOGIN_CHECK_ERROR,
    payload: { error: error }
})

export const loginUsersError = (error) => ({
    type: LOGIN_ERROR,
    payload: { error: error }
})

export const logout = () => ({
    type: LOGOUT,
})

export const loginConfirm = () => ({
    type: LOGIN_CONFIRM,
})

export const registerUsersSuccess = (data) => ({
    type: REGISTER_CONFIRM,
    payload: {
        refresh: data.refresh,
        access: data.access
    }
})

export const registerUsersError = (error) => ({
    type: REGISTER_ERROR,
    payload: { error: error }
})

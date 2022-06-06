import axios from 'axios';
import {
    loginUsersSuccess,
    loginUsersError,
    refreshUsersToken,
    verifyUsersSuccess,
    verifyUsersError
} from '../../../actionCreators/User/LoginActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

export const logIn = (data) => async dispatch => {
    await instance.post('token/', data)
        .then((response) =>
            dispatch(loginUsersSuccess(response.data)))
        .catch((error) =>
            dispatch(loginUsersError(error)))
}
// refresh/
export const verify = (data) => async dispatch => {
    await instance.post('token/verify/', { token: data.access })
        .then(() =>
            dispatch(verifyUsersSuccess()))
        .catch(() => {
            instance.post('token/refresh/', { refresh: data.refresh })
                .then((response) =>
                    dispatch(refreshUsersToken(response.data)))
                .catch((error) => {
                    dispatch(verifyUsersError(error))
                })
        })
}
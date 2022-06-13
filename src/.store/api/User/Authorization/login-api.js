import {
    loginUsersSuccess,
    loginUsersError,
    refreshUsersToken,
    verifyUsersSuccess,
    verifyUsersError
} from '../../../actionCreators/User/LoginActionCreators';
import { instance } from '../../instance-api';


// Изменить аутентификакцию, т.к. локальное хранилище не обновляется, вызываясь лишь раз при загрузке страницы
export const logIn = (data) => async dispatch => {
    await instance.post('token/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    }, data)
        .then((response) =>
            dispatch(loginUsersSuccess(response.data)))
        .catch((error) =>
            dispatch(loginUsersError(error)))
}
// refresh/
export const verify = () => async dispatch => {
    await instance.post('token/verify/', { token: localStorage.getItem('access') })
        .then((response) =>
            dispatch(verifyUsersSuccess(response.data)))
        .catch((error) => {
            instance.post('token/refresh/', { refresh: localStorage.getItem('refresh') })
                .then((response) =>
                    dispatch(refreshUsersToken(response.data)))
                .catch((error) => {
                    dispatch(verifyUsersError(error))
                })
        })
}
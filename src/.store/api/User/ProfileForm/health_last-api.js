import axios from 'axios';
import {
    getLastHealthFailure,
    getLastHealthsSuccess
} from '../../../actionCreators/User/HealthLastActionCreators';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access')
    }
});

export const getHealthLast = () => async dispatch => {
    await instance.get('MyHealthLast/')
        .then((response) =>
            dispatch(getLastHealthsSuccess(response.data)))
        .catch((error) =>
            dispatch(getLastHealthFailure(error)))
}
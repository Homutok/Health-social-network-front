import axios from 'axios';
import {
    getDataProfileFailure,
    getDataProfileSuccess
} from '../../../actionCreators/User/ProfileActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access')
    }
});

export const getProfileData = () => async dispatch => {
    await instance.get('MyProfile/')
        .then((response) =>
            dispatch(getDataProfileSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataProfileFailure(error)))
}
import axios from 'axios';
import {
    getHealthListSuccess,
    getHealthListFailure
} from '../../actionCreators/Diarys/HealthListActionCreators';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access')
    }
});

export const getHealthList = () => async dispatch => {
    await instance.get('MyHealth/')
        .then((response) =>
            dispatch(getHealthListSuccess(response.data)))
        .catch((error) =>
            dispatch(getHealthListFailure(error)))
}
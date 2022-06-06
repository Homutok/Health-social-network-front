import axios from 'axios';
import {
    getToDoSuccess,
    getToDoFailure
} from '../../actionCreators/Diarys/ToDoActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access')
    }
});

export const getToDoDataList = () => async dispatch => {
    await instance.get('ToDo/')
        .then((response) =>
            dispatch(getToDoSuccess(response.data)))
        .catch((error) =>
            dispatch(getToDoFailure(error)))
}
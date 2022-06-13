import {
    getToDoSuccess,
    getToDoFailure
} from '../../actionCreators/Diarys/ToDoActionCreators';
import { instance } from '../instance-api';


export const getToDoDataList = () => async dispatch => {
    await instance.get('ToDo/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getToDoSuccess(response.data)))
        .catch((error) =>
            dispatch(getToDoFailure(error)))
}
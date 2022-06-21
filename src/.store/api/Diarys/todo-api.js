import {
    getToDoSuccess,
    getToDoFailure,
    postToDoSuccess,
    postToDoFailure,
    changeToDoSuccess,
    changeToDoFailure,
    deleteToDoSuccess,
    deleteToDoFailure
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


export const addToDoData = (label, text) => async dispatch => {
    await instance.post('ToDo/', { task_name: label, task_summary: text }, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getToDoDataList()))
        .catch((error) =>
            dispatch(postToDoFailure(error)))
}

export const completeToDoData = (id) => async dispatch => {
    await instance.put('ToDo/' + id + '/', { complete_stage: true }, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getToDoDataList()))
        .catch((error) =>
            dispatch(changeToDoFailure(error)))
}

export const deleteToDoData = (id) => async dispatch => {
    await instance.delete('ToDo/' + id + '/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getToDoDataList()))
        .catch((error) =>
            dispatch(deleteToDoFailure(error)))
}
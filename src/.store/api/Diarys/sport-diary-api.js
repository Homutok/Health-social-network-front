import {
    getSportListFailure,
    getSportListSuccess
} from '../../actionCreators/Diarys/SportDiaryActionCreators';
import { instance } from '../instance-api';

export const getSportList = () => async dispatch => {
    await instance.get('Workouts/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getSportListSuccess(response.data)))
        .catch((error) =>
            dispatch(getSportListFailure(error)))
}

export const addSport = (data) => async dispatch => {
    await instance.post('Workouts/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getSportList()))
        .catch((error) =>
            dispatch(getSportListFailure(error)))
}

export const deleteSport = (id) => async dispatch => {
    await instance.delete('WorkoutsDelete/' + id + '/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getSportList()))
        .catch((error) =>
            dispatch(getSportListFailure(error)))
}
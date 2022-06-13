import {
    getHealthListSuccess,
    getHealthListFailure
} from '../../actionCreators/Diarys/HealthListActionCreators';
import { instance } from '../instance-api';

export const getHealthList = () => async dispatch => {
    await instance.get('MyHealth/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getHealthListSuccess(response.data)))
        .catch((error) =>
            dispatch(getHealthListFailure(error)))
}
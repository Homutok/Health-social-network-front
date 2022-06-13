import {
    getLastHealthFailure,
    getLastHealthsSuccess
} from '../../../actionCreators/User/HealthLastActionCreators';
import { instance } from '../../instance-api';


export const getHealthLast = () => async dispatch => {
    await instance.get('MyHealthLast/',{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    }
)
        .then((response) =>
            dispatch(getLastHealthsSuccess(response.data)))
        .catch((error) =>
            dispatch(getLastHealthFailure(error)))
}
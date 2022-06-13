import {
    getDataProfileFailure,
    getDataProfileSuccess
} from '../../../actionCreators/User/ProfileActionCreators';
import { instance } from '../../instance-api';


export const getProfileData = () => async dispatch => {
    await instance.get('MyProfile/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getDataProfileSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataProfileFailure(error)))
}
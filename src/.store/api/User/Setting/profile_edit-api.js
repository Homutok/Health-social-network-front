import {
    updateDataProfileSuccess,
    updateDataProfileFailure
} from '../../../actionCreators/User/ProfileActionCreators';
import { instance } from '../../instance-api';

export const changeProfileData = (data, id) => async dispatch => {
    await instance.put('ProfileUpdate/' + id + '/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        },
    })
        .then((response) =>
            dispatch(updateDataProfileSuccess(response.data)))
        .catch((error) =>
            dispatch(updateDataProfileFailure(error)))
}
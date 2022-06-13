import {
    getDataImageSuccess,
    getDataImageFailure
} from '../../../actionCreators/User/PhotoImageActionCreators';
import { instance } from '../../instance-api';

export const getPhotoDataList = () => async dispatch => {
    await instance.get('Image/')  
        .then((response) =>
            dispatch(getDataImageSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataImageFailure(error)))
}
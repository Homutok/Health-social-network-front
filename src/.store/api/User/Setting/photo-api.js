import axios from 'axios';
import {
    getDataImageSuccess,
    getDataImageFailure
} from '../../../actionCreators/User/PhotoImageActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});
export const getPhotoDataList = () => async dispatch => {
    await instance.get('Image/')  
        .then((response) =>
            dispatch(getDataImageSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataImageFailure(error)))
}
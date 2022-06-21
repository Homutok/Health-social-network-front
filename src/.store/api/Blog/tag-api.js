import { getTagFailure, getTagSuccess } from '../../actionCreators/Blog/TagActionCreators';
import { instance } from '../instance-api';


export const getTagsInfo = (data) => async dispatch => {
    await instance.get('Tags/?search=' + data)
        .then((response) =>
            dispatch(getTagSuccess(response.data)))
        .catch((error) =>
            dispatch(getTagFailure(error)))
}
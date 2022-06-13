import {
    getDataAchievementsFailure,
    getDataAchievementsSuccess
} from '../../../actionCreators/User/AchievementsActionCreators';
import { instance } from '../../instance-api';

export const getAchievementsList = () => async dispatch => {
    await instance.get('MyAchievments/',{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getDataAchievementsSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataAchievementsFailure(error)))
}
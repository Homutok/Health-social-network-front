import axios from 'axios';
import {
    getDataAchievementsFailure,
    getDataAchievementsSuccess
} from '../../../actionCreators/User/AchievementsActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access')
    }
});

export const getAchievementsList = () => async dispatch => {
    await instance.get('MyAchievments/')
        .then((response) =>
            dispatch(getDataAchievementsSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataAchievementsFailure(error)))
}
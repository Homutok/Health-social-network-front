import axios from 'axios';
import {
    getFoodFailure,
    getFoodSuccess,
    selectFood
} from '../../actionCreators/Food/FoodSearchActionCreators';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

export const getFoodInfo = (data) => async dispatch => {
    await instance.get('Food/?search=' + data)
        .then((response) =>
            dispatch(getFoodSuccess(response.data)))
        .catch((error) =>
            dispatch(getFoodFailure(error)))
}

export const getFoodNutrients = (data) => async dispatch => {
    await instance.get('FoodNutrient/?search=' + data)
        .then((response) =>
            dispatch(selectFood(response.data)))
        .catch((error) =>
            dispatch(getFoodFailure(error)))
}
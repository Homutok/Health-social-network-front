import {
    getFoodFailure,
    getFoodSuccess,
    selectFood
} from '../../actionCreators/Food/FoodSearchActionCreators';
import { instance } from '../instance-api';


export const getFoodInfo = (data) => async dispatch => {
    await instance.get('Food/?search=' + data)
        .then((response) =>
            dispatch(getFoodSuccess(response.data)))
        .catch((error) =>
            dispatch(getFoodFailure(error)))
}

export const getFoodNutrients = (data, id) => async dispatch => {
    await instance.get('FoodNutrient/?search=' + data)
        .then((response) =>
            dispatch(selectFood(response.data, id)))
        .catch((error) =>
            dispatch(getFoodFailure(error)))
}
import {
    GET_FOOD_FAILURE,
    GET_FOOD_SUCCESS,
    SELECT_FOOD,
    DELETE_FOOD,
    RELOAD_FOOD
} from "../../actions/Food/FoodSearchActions"


export const getFoodSuccess = (data) => ({
    type: GET_FOOD_SUCCESS,
    payload: data
})

export const getFoodFailure = (error) => ({
    type: GET_FOOD_FAILURE,
    payload: error
})

export const selectFood = (data) => ({
    type: SELECT_FOOD,
    payload: data
})

export const deleteFood = (data) => ({
    type: DELETE_FOOD,
    payload: data
})

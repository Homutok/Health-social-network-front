import {
    DELETE_FOOD,
    GET_FOOD_FAILURE,
    GET_FOOD_SUCCESS,
    RELOAD_FOOD,
    SELECT_FOOD
} from "../../actions/Food/FoodSearchActions";

let initalState = {
    foodList: [],
    selectedFoodList: [],
    isLoaded: false
}
const foodReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_FOOD_SUCCESS:
            let LoadDataList = action.payload.results.map((food => ({id: food.id, value:food.food_name, title:food.food_name})))
            return {
                ...state,
                foodList: LoadDataList,
                isLoaded: true
            };
        case GET_FOOD_FAILURE:
            return { ...state }
        case SELECT_FOOD:
            return {
                ...state,
                selectedFoodList: [
                    action.payload
                ]
            }
        case DELETE_FOOD:
            return { ...state }
        case RELOAD_FOOD:
            return { ...state, isLoaded: false }
        default:
            return state;
    }
}
export default foodReducer;
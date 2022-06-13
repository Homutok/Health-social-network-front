import {
    ADD_FOOD,
    DELETE_FOOD,
    GET_FOOD_FAILURE,
    GET_FOOD_SUCCESS,
    RELOAD_FOOD,
    SELECT_FOOD
} from "../../actions/Food/FoodSearchActions";

let initalState = {
    foodList: [],
    selectedFoodList: [[]],
    isLoaded: false
}
const foodReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_FOOD_SUCCESS:
            let LoadDataList = action.payload.results.map((food => ({ id: food.id, value: food.food_name, title: food.food_name })))
            return {
                ...state,
                foodList: LoadDataList,
                isLoaded: true
            };
        case GET_FOOD_FAILURE:
            return { ...state }
        case SELECT_FOOD:
            state.selectedFoodList[action.index] = action.payload
            return {
                ...state,
                selectedFoodList: [
                    ...state.selectedFoodList
                ]
            }
        case ADD_FOOD:
            return {
                ...state,
                selectedFoodList: [
                    ...state.selectedFoodList, []
                ]
            }
        case DELETE_FOOD:
            if (state.selectedFoodList.length > 1)
                return {
                    ...state,
                    selectedFoodList: [
                        ...state.selectedFoodList.slice(0, action.payload),
                        ...state.selectedFoodList.slice(action.payload + 1)
                    ]
                }
        case RELOAD_FOOD:
            return { ...state, isLoaded: false }
        default:
            return state;
    }
}
export default foodReducer;
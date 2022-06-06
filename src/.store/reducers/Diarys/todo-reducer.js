import {
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE
} from "../../actions/Diarys/ToDoActions"

let initalState = {
    todoList: [],
    isLoaded: false
}
const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_TODO_SUCCESS:
            let LoadDataList = action.payload.map((todo => todo))
            return {
                ...state,
                todoList: LoadDataList,
                isLoaded: true
            };
        case GET_TODO_FAILURE:
            alert(action.payload)
            return { ...state }
        default:
            return state;
    }
}
export default todoReducer;
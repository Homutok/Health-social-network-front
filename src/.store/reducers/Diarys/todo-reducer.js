import {
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE,
    POST_TODO_FAILURE,
    DELETE_TODO_FAILURE,
    COMPLETE_TODO_FAILURE
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
            console.log(action.payload)
            return {
                ...state,
                todoList: [],
                isLoaded: false
            }
        case POST_TODO_FAILURE:
            return {
                ...state,
                todoList: [],
                isLoaded: false
            }
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                todoList: [],
                isLoaded: false
            }
        case COMPLETE_TODO_FAILURE:
            return {
                ...state,
                todoList: [],
                isLoaded: false
            }
        default:
            return state;
    }
}
export default todoReducer;
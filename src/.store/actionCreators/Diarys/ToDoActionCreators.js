import {
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE
} from "../../actions/Diarys/ToDoActions"

export const getToDoSuccess= (data) => ({
    type: GET_TODO_SUCCESS,
    payload: data
})
export const getToDoFailure= (error) => ({
    type: GET_TODO_FAILURE,
    payload: error
})

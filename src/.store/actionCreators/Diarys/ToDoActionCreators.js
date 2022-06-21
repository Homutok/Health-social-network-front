import {
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE,
    TODO_CLEAR,
    POST_TODO_SUCCESS,
    POST_TODO_FAILURE,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_FAILURE,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE
} from "../../actions/Diarys/ToDoActions"

export const getToDoSuccess= (data) => ({
    type: GET_TODO_SUCCESS,
    payload: data
})

export const getToDoFailure= (error) => ({
    type: GET_TODO_FAILURE,
    payload: error
})

export const postToDoSuccess= () => ({
    type: POST_TODO_SUCCESS
})

export const postToDoFailure= (error) => ({
    type: POST_TODO_FAILURE,
    payload: error
})

export const changeToDoSuccess= () => ({
    type: COMPLETE_TODO_SUCCESS
})

export const changeToDoFailure= (error) => ({
    type: COMPLETE_TODO_FAILURE,
    payload: error
})

export const deleteToDoSuccess= () => ({
    type: DELETE_TODO_SUCCESS,
})

export const deleteToDoFailure= (error) => ({
    type: DELETE_TODO_FAILURE,
    payload: error
})

export const toDoClear= () => ({
    type: TODO_CLEAR,
})

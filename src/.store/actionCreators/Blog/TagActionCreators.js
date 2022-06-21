import {
    FIND_TAGS_SUCCESS,
    CHOOSE_TAGS_SUCCESS,
    DELETE_TAGS_SUCCESS,
    GET_ERROR,
    ADD_TAG
} from "../../actions/Blog/BlogActions"

export const getTagSuccess = (data) => ({
    type: FIND_TAGS_SUCCESS,
    payload: data
})

export const getTagFailure = (error) => ({
    type: GET_ERROR,
    payload: error
})

export const selectTag= ( id, data) => ({
    type: CHOOSE_TAGS_SUCCESS,
    payload: data,
    index: id
})

export const deleteTag = (data) => ({
    type: DELETE_TAGS_SUCCESS,
    payload: data
})

export const addTag = () => ({
    type: ADD_TAG,
})

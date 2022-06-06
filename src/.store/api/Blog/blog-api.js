import axios from 'axios';
import {
    getDataListSuccess,
    getDataDetailSuccess,
    completePostSuccess,
    updatePostSuccess,
    completeCommentSuccess,
    deletePostSuccess,
    getDataFailure
} from '../../actionCreators/Blog/BlogActionCreators';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access')
    }
});

export const getBlogDataList = () => async dispatch => {
    await instance.get('Blog/')  
        .then((response) =>
            dispatch(getDataListSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const getBlogDataDetail = (id) => async dispatch => {
    await instance.get('Blog/' + id)
        .then((response) =>
            dispatch(getDataDetailSuccess(response.data)))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const createBlogDataDetail = (data) => async dispatch => {
    await instance.post('Blog/', data)
        .then(() =>
            dispatch(completePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const updateBlogDataDetail = (data, id) => async dispatch => {
    await instance.put('Blog/' + id + '/', data)
        .then(() =>
            dispatch(updatePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const deleteBlogDataDetail = (id) => async dispatch => {
    await instance.delete('Blog/' + id)
        .then(() =>
            dispatch(deletePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const postNewComment = (data) => async dispatch => {
    await instance.post('Comments/', data)
        .then(() =>
            dispatch(completeCommentSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}
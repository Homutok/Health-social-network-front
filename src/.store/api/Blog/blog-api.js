import {
    getDataListSuccess,
    getDataDetailSuccess,
    completePostSuccess,
    updatePostSuccess,
    completeCommentSuccess,
    deletePostSuccess,
    getDataFailure,
    toggleLikePost
} from '../../actionCreators/Blog/BlogActionCreators';
import { instance } from '../instance-api';
import { verify } from '../User/Authorization/login-api';

export const getBlogDataList = (type) => async dispatch => {
    await instance.get('Blog/?search=' + type, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getDataListSuccess(response.data)))
        .catch((error) => error.response.status === 401
            ? dispatch(verify())
                .then(() => dispatch(getBlogDataList(type)))
                .catch(() => console.log('error'))
            : dispatch(getDataFailure(error)))
}

export const getBlogDataDetail = (id) => async dispatch => {
    await instance.get('Blog/' + id, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getDataDetailSuccess(response.data)))
        .catch((error) => error.response.status === 401
            ? dispatch(verify())
                .then(() => dispatch(getBlogDataDetail(id)))
                .catch(() => console.log('error'))
            : dispatch(getDataFailure(error)))
}

export const createBlogDataDetail = (data) => async dispatch => {
    await instance.post('Blog/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then(() =>
            dispatch(getBlogDataList('')))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const updateBlogDataDetail = (data, id) => async dispatch => {
    await instance.put('Blog/' + id + '/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then(() =>
            dispatch(updatePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const deleteBlogDataDetail = (id) => async dispatch => {
    await instance.delete('Blog/' + id + '/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then(() =>
            dispatch(deletePostSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const postNewComment = (data) => async dispatch => {
    await instance.post('Comments/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then(() =>
            dispatch(completeCommentSuccess()))
        .catch((error) =>
            dispatch(getDataFailure(error)))
}

export const getPostLikeOFProfile = (id) => async dispatch => {
    await instance.get('Liked/' + id, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getDataDetailSuccess(response.data)))
        .catch((error) => error.response.status === 401
            ? dispatch(verify())
                .then(() => dispatch(getPostLikeOFProfile(id)))
                .catch(() => console.log('error'))
            : dispatch(getDataFailure(error)))
}

export const likePost = (data) => async dispatch => {
    await instance.post('Likes/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getBlogDataList('')))
        .catch((error) => error.response.status === 401
            ? dispatch(verify())
                .then(() => dispatch(likePost(data)))
                .catch(() => console.log('error'))
            : dispatch(getDataFailure(error)))
}

export const unLikePost = (id) => async dispatch => {
    await instance.delete('Likes/' + id + '/', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
        .then((response) =>
            dispatch(getBlogDataList('')))
        .catch((error) => error.response.status === 401
            ? dispatch(verify())
                .then(() => dispatch(likePost(id)))
                .catch(() => console.log('error'))
            : dispatch(getDataFailure(error)))
}
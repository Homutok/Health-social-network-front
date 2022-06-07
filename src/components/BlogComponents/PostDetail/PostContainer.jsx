import { connect } from 'react-redux';
// import {
//     changeNewComment,
// } from '../../../../.store/actionCreators/BlogForm/BlogActionCreators'

import {
    getBlogDataDetail,
    // deleteBlogDataDetail,
    // postNewComment
} from '../../../.store/api/Blog/blog-api'

import PostDetail from './PostDetail';

function mapStateToProps(state) {
    return {
        post: state.blog.postDetail,
        // userdata: state.profile.profileInfo,
        // newText: state.blog.newCommentText,
        // authData: state.profile.isAuthData.isAuth,
        isLoadedCheck: state.blog.isLoadedDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loadData: (id, token) => {
            dispatch(getBlogDataDetail(id, token))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
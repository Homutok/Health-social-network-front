import { connect } from 'react-redux';
// import {
//     changeNewComment,
// } from '../../../../.store/actionCreators/BlogForm/BlogActionCreators'

import {
    getBlogDataDetail,
    postNewComment,
    likePost,
    unLikePost,
    deleteBlogDataDetail,
    // postNewComment
} from '../../../.store/api/Blog/blog-api'
import { getProfileData } from '../../../.store/api/User/ProfileForm/profile-api';

import PostDetail from './PostDetail';

function mapStateToProps(state) {
    return {
        profileInfo: state.profile.dataProfile.id,
        profilePosts: state.profile.dataProfile.post_for_user,
        profileLoad: state.profile.isLoadedProfile,
        post: state.blog.postDetail,
        isLoadedCheck: state.blog.isLoadedDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loadData: (id) => {
            dispatch(getProfileData());
            dispatch(getBlogDataDetail(id))
        },
        completeComment: (newMsgElement, id) => {
            dispatch(postNewComment({ comment_text: newMsgElement, comment_post: id, }))
        },
        LikePost: (index) => {
            dispatch(likePost({ content_id: index }));
        },
        unLikePost: (index) => {
            dispatch(unLikePost(index));
        },
        postDelete: (id) => {
            dispatch(deleteBlogDataDetail(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
import { connect } from 'react-redux';
import { getBlogDataList } from '../../../.store/api/Blog/blog-api';
import Blog from './BlogPage';

function mapStateToProps(state) {
    return {
        posts: state.blog.postList,
        isLoadedCheck: state.blog.isLoadedList,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPostsData: () => {
            dispatch(getBlogDataList());
        },
        // loadProfileData: (token) => {
        //     dispatch(getProfileInfo(token))
        // },
        // LikePost: (index, token) => {
        //     dispatch(like(index, token));
        // },
        // unLikePost: (index, token) => {
        //     dispatch(unlike(index, token));
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
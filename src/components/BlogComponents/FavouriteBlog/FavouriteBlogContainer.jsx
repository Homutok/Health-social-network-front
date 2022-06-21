import { connect } from 'react-redux';
import { getBlogDataList, likePost, unLikePost } from '../../../.store/api/Blog/blog-api';
import { getProfileData } from '../../../.store/api/User/ProfileForm/profile-api';
import FavouriteBlogPage from './FavouriteBlogPage';

function mapStateToProps(state) {
    return {
        profileInfo: state.profile.dataProfile.id,
        profileLoad: state.profile.isLoadedProfile,
        posts: state.blog.postList,
        isLoadedCheck: state.blog.isLoadedList,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPostsData: () => {
            dispatch(getProfileData());
            dispatch(getBlogDataList(''))
        },
        LikePost: (index) => {
            dispatch(likePost({ content_id: index }));
        },
        unLikePost: (index) => {
            dispatch(unLikePost(index));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBlogPage);
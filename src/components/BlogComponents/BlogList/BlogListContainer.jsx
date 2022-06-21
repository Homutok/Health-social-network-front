import { connect } from 'react-redux';
import { addTag, deleteTag, selectTag } from '../../../.store/actionCreators/Blog/TagActionCreators';
import { createBlogDataDetail, getBlogDataList, likePost, unLikePost } from '../../../.store/api/Blog/blog-api';
import { getTagsInfo } from '../../../.store/api/Blog/tag-api';
import { getProfileData } from '../../../.store/api/User/ProfileForm/profile-api';
import Blog from './BlogPage';

function mapStateToProps(state) {
    return {
        profileInfo: state.profile.dataProfile.id,
        profileLoad: state.profile.isLoadedProfile,
        posts: state.blog.postList,
        tagSearch: state.blog.searchPostTags,
        tagSelected: state.blog.bufferNewPostTags,
        isLoadedCheck: state.blog.isLoadedList,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPostsData: (type) => {
            dispatch(getProfileData());
            (type === 'all')
                ? dispatch(getBlogDataList(''))
                : dispatch(getBlogDataList(type))

        },

        createPost: (label, text, tags) => {
            dispatch(createBlogDataDetail({ post_name: label, post_summary: text }));
        },

        LikePost: (index) => {
            dispatch(likePost({ content_id: index }));
        },
        unLikePost: (index) => {
            dispatch(unLikePost(index));
        },
        change_search: (text) => {
            dispatch(getTagsInfo(text));
        },
        select_search: (id, data) => {
            dispatch(selectTag(id, data));
        },
        delete_search: (index) => {
            dispatch(deleteTag(index));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
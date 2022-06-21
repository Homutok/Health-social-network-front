import {
    GET_BLOG_LIST,
    GET_BLOG_DETAIL,
    POST_NEW_POST_SUCCESS,
    POST_COMMENT_SUCCESS,
    DELETE_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    GET_ERROR,
    TOGGLE_LIKE_POST_SUCCESS,
    GET_LIKE_POST_SUCCESS,
    FIND_TAGS_SUCCESS,
    CHOOSE_TAGS_SUCCESS,
    DELETE_TAGS_SUCCESS,
    ADD_TAG
} from "../../actions/Blog/BlogActions"



let initalState = {
    postList: [],
    postDetail: {},
    bufferNewPostData: {},
    bufferNewPostTags: [],
    searchPostTags: [],
    newCommentText: 'Enter comment',
    isLoadedList: false,
    isLoadedDetail: false,
    // Не знал как решить проблему, когда при переходе из списка к детальному и обратно, очищался isLoaded, потому решил сделать их взаимоисключащими
    isCreatedNewPost: false

}

const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_BLOG_LIST:
            let LoadDataList = action.payload.map((post => ({ ...post })))
            return {
                ...state,
                postList: LoadDataList,
                bufferNewPostData: {},
                isLoadedList: true,
                isLoadedDetail: false
            }
        case GET_BLOG_DETAIL:
            return {
                ...state,
                postDetail: action.payload,
                bufferNewPostData: action.payload,
                isLoadedList: false,
                isLoadedDetail: true
            }
        case GET_ERROR:
            return { ...state }
        case POST_NEW_POST_SUCCESS:
            return {
                ...state,
                isLoadedList: false,
                bufferNewPostData: {}
            }
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                isLoadedDetail: false,
                newCommentText: ''
            }
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                isLoadedList: false,
                isLoadedDetail: false,
                bufferNewPostData: {}
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                isLoadedList: false,
                isLoadedDetail: true
            }
        case GET_LIKE_POST_SUCCESS:
            state.postList[action.payload].liked = true
            return {
                ...state,
                postList: state.postList,
                isLoadedList: true,
                isLoadedDetail: true
            }
        case TOGGLE_LIKE_POST_SUCCESS:
            return {
                ...state,
                isLoadedList: false,
                isLoadedDetail: false
            }
        case FIND_TAGS_SUCCESS:
            let postTags = action.payload.map((tag => ({ id: tag.id, value: tag.tag_name, title: tag.tag_name })))
            return {
                ...state,
                searchPostTags: postTags,
                isLoaded: true
            };
        case CHOOSE_TAGS_SUCCESS:
            if (state.bufferNewPostTags.filter(data => (data.value === action.payload)).length < 1)
                return {
                    ...state,
                    bufferNewPostTags: [
                        ...state.bufferNewPostTags, { id: action.index, value: action.payload }
                    ]
                }
        case DELETE_TAGS_SUCCESS:
            if (state.bufferNewPostTags.length > 0)
                return {
                    ...state,
                    bufferNewPostTags: [
                        ...state.bufferNewPostTags.slice(0, action.payload),
                        ...state.bufferNewPostTags.slice(action.payload + 1)
                    ]
                }
        case ADD_TAG:
            return {
                ...state,
                bufferNewPostTags: [
                    ...state.bufferNewPostTags, []
                ]
            }
        default:
            return state;
    }
}

export default blogReducer;
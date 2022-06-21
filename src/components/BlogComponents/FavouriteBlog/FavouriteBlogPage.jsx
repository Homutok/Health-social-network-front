import { Space } from "antd";
import { useEffect} from "react";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";
import FavouriteBlog from "./FavouriteBlog";



const FavouriteBlogPage = (props) => {

    useEffect(() => {
    }, [])

    return <PageBreadCrumb
        parent='Блог'
        child='Избранные записи'
    >
        <Space direction="vertical" size="middle" style={{ display: 'flex' }} wrap>
            <FavouriteBlog
                profileID={props.profileInfo}
                like={props.LikePost}
                unlike={props.unLikePost}
                load={props.isLoadedCheck}
                loadProfile={props.profileLoad}
                getPosts={props.getPostsData}
                posts={props.posts} />
        </Space>
    </PageBreadCrumb>;
}
export default FavouriteBlogPage
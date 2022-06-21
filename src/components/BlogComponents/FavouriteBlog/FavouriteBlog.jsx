import { Row } from "antd";
import { useEffect, useState } from "react";
import BlogPost from "../BlogList/BlogPost";
import PostLoading from "../BlogList/PostLoad";



const FavouriteBlog = (props) => {
    const [isLoad, setLoad] = useState(false);
    useEffect(() => {
        props.getPosts()
        setLoad(props.load === props.loadProfile)
    }, [props.load, props.loadProfile])
    return <Row type="flex" justify="center" align="middle" >
        {
            isLoad
                ?
                props.posts.filter((postInfo) => postInfo.likes_for_post.filter((likes) => likes.user === props.profileID).length > 0).map((post) =>
                    <BlogPost
                        profileID={props.profileID}
                        like={props.like}
                        unlike={props.unlike}
                        data={post}
                        isLoad={isLoad}
                        key={post.id}
                    />)
                : < PostLoading />
        }
    </Row>
}
export default FavouriteBlog
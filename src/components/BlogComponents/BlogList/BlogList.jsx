import { Row } from "antd";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "./BlogPost";
import PostLoading from "./PostLoad";


const BlogList = (props) => {
    const [isLoad, setLoad] = useState(false);

    const type = useParams().type;


    useEffect(() => {
        props.getPosts(type)
        setLoad(props.load === props.loadProfile)
    }, [props.load, props.loadProfile, type])

    return <Row type="flex" justify="center" align="middle" >
        {
            isLoad
                ? props.posts.map((post) =>
                    <BlogPost
                        profileID={props.profileID}
                        like={props.like}
                        unlike={props.unlike}
                        data={post}
                        isLoad={isLoad}
                        key={post.id}
                    />)
                : <PostLoading />
        }
    </Row>
}
export default BlogList
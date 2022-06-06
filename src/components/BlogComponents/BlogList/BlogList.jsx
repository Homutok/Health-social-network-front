import { Row } from "antd";
import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import PostLoading from "./PostLoad";


const BlogList = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoad, setLoad] = useState(false);

    useEffect(() => {
        props.getPosts()
        setPosts(props.posts)
        setLoad(props.load)
    }, [props.load])

    return <Row type="flex" justify="center" align="middle" >
        {   
            isLoad
                ? posts.map((post) => <BlogPost data={post} isLoad={isLoad}/>)
                : <PostLoading />
        }
    </Row>
}
export default BlogList
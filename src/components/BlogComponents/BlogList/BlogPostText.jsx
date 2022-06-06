import React, { useEffect, useState } from 'react';

const PostText = (props) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        props.fulltext ? setPost(props.postData.post_summary) : setPost(props.postData.post_summary.substring(0, 200) + "...");
    }, [props.postData])

    return <p>{post}</p>
}
export default PostText
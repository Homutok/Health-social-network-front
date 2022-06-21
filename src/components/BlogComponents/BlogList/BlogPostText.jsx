import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const PostText = (props) => {
    const [post, setPost] = useState('text');

    useEffect(() => {
        props.fulltext ? setPost(props.postData.post_summary) : setPost(props.postData.post_summary.substring(0, 200) + "...");
    }, [props.postData])

    return <div align='left'>{parse(post)}</div>
}
export default PostText
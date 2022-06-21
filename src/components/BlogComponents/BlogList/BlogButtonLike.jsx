import { Col, Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const LikeButton = (props) => {
    const [liked, setLike] = useState([]);

    useEffect(() => {
        setLike(props.liked);
    }, [props.liked])

    const colorLike = () => {
        return likeOrDisLike() ? "#F91709" : "#8E8E8E";
    }
    const getLikeObject = () => props.userLiked.filter(like => like.user === props.profileID)

    const likeOrDisLike = () => getLikeObject().length > 0

    const actionLike = (indexPost) => likeOrDisLike() ? props.unlike(getLikeObject()[0].id) : props.like(indexPost);

    return <Col span={8} >
        <Button type="text" onClick={() => { actionLike(props.id) }}>
            <HeartTwoTone twoToneColor={colorLike()} />
            {liked}
        </Button>
    </Col>


}
export default LikeButton
import { Col, Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const LikeButton = (props) => {

    const colorLike = () => {
        return "#F91709"
    }
    return <Col span={8} >
        <Button type="text">
            <HeartTwoTone twoToneColor={colorLike()} />
            1
        </Button>
    </Col>


}
export default LikeButton
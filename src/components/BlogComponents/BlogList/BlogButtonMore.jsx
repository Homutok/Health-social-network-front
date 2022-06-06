import React from 'react';
import { Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const MoreButton = (props) => {

    return <Col span={8} offset={8} >
        Go to discussion <MessageOutlined />
    </Col>

}
export default MoreButton
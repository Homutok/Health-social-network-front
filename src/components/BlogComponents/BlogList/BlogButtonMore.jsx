import React from 'react';
import { Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MoreButton = (props) => {

    return <Col span={8} offset={8} >
        <Link to={"/blog/" + props.id} style={{ color: 'black' }}>
            Go to discussion <MessageOutlined />
        </Link>
    </Col>

}
export default MoreButton
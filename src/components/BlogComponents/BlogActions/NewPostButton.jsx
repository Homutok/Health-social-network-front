import React, { useEffect } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const NewPostButton = (props) => {

    useEffect(() => {
    }, [props.stateIsCreatedPost])

    return <Button type="primary" shape="round" span={24} offset={16} onClick={() => props.showModal()} >
        <PlusOutlined />
    </Button>
}
export default NewPostButton
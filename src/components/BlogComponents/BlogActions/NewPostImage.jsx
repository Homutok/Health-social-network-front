import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Row, Upload } from 'antd';
import { useState } from 'react';

const NewPostImageUpload = () => {

    return <Row>
        <Upload
            listType="picture"
        >
            <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    </Row>
};

export default NewPostImageUpload;
import React, { useEffect } from 'react';
import {
    Form,
    Input
} from 'antd';

const { TextArea } = Input;

const ProfileEditSummary = (props) => {

    useEffect(() => {
    }, [])

    return <Form.Item label="Немного о себе">
        <TextArea
            ref={props.summary}
            defaultValue={props.summaryDefault}
            rows={4} />
    </Form.Item>
}
export default ProfileEditSummary
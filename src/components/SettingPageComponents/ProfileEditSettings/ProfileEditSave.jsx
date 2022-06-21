import React, { useEffect } from 'react';
import {
    Button,
    Form
} from 'antd';


const ProfileEditSave = (props) => {

    useEffect(() => {
    }, [])

    return <Form.Item label="Сохранить">
        <Button onClick={props.save}>Сохранить</Button>
    </Form.Item>
}
export default ProfileEditSave
import React, { useEffect, useRef } from 'react';
import {
    Form,
    Input
} from 'antd';

const ProfileEditFullName = (props) => {

    useEffect(() => {
    }, [])

    return <>
        <Form.Item label="Полное имя">
            <Input
                defaultValue={props.firstNameDefault}
                ref={props.firstName} />
        </Form.Item>
        <Form.Item label="Фамилия">
            <Input
                defaultValue={props.secondNameDefault}
                ref={props.secondName} />
        </Form.Item>
    </>
}
export default ProfileEditFullName
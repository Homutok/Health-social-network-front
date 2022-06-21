import React, { useEffect } from 'react';
import {
    Form,
    Select
} from 'antd';
const ProfileEditGender = (props) => {

    useEffect(() => {
        props.changeGender(props.genderDefault)
    }, [])

    return <Form.Item label="Пол">
        <Select
            defaultValue={props.genderDefault}
            onChange={(value) => props.changeGender(value)}
        >
            <Select.Option value="male">Мужской</Select.Option>
            <Select.Option value="female">Женский</Select.Option>
            <Select.Option value="other">Другие</Select.Option>
        </Select>
    </Form.Item>
}
export default ProfileEditGender
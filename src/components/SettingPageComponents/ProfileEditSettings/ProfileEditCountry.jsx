import React, { useEffect } from 'react';
import {
    Form,
    Select
} from 'antd';

const ProfileEditCountry = (props) => {

    useEffect(() => {
        props.changeCountry(props.countryDefault)
    }, [])

    return <Form.Item label="Страна">
        <Select
            defaultValue={props.countryDefault}
            onChange={(value) => props.changeCountry(value)}
        >
            <Select.Option value="RU">Россия</Select.Option>
            <Select.Option value="US">США</Select.Option>
            <Select.Option value="UK">Великобритания</Select.Option>
        </Select>
    </Form.Item>
}
export default ProfileEditCountry
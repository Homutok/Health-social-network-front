import React, { useEffect } from 'react';
import {
    DatePicker,
    Form,
    Input
} from 'antd';
import moment from 'moment';

const ProfileEditUniversity = (props) => {

    useEffect(() => {
        props.changeUniversityEnd(props.universityEndDefault)
    }, [])

    return <>
        <Form.Item label="Университет">
            <Input
                defaultValue={props.universityDefault}
                ref={props.university}
            />
        </Form.Item>
        <Form.Item label="Дата окончания университета">
            <DatePicker
                format={"YYYY-MM-DD"}
                defaultValue={moment(props.universityEndDefault)}
                onChange={(date, dateString) => props.changeUniversityEnd(dateString)}
            />
        </Form.Item>
    </>
}
export default ProfileEditUniversity
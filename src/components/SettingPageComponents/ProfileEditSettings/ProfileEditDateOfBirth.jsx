import React, { useEffect } from 'react';
import {
    DatePicker,
    Form
} from 'antd';
import moment from 'moment';
const ProfileEditDateOfBirth = (props) => {
    useEffect(() => {
        props.changeDateOfBirth(props.dateBirthDefault)
    }, [])

    return <Form.Item label="Дата рождения">
        <DatePicker
            onChange={(date, dateString) => props.changeDateOfBirth(dateString)}
            format={"YYYY-MM-DD"}
            defaultValue={moment(props.dateBirthDefault, 'YYYY-MM-DD')}
        />
    </Form.Item>
}
export default ProfileEditDateOfBirth
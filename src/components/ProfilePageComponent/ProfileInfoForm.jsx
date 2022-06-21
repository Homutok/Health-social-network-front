import { Avatar, Card } from "antd";
import ProfilePublicInfo from "./InfoBlock";
import {
    SettingOutlined,
    EditOutlined
} from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg';

const ProfileInfoForm = (props) => {

    const navigate = useNavigate();

    const [profileImage, setProfileImage] = useState(logo);

    useEffect(() => {
        props.load
            ? setProfileImage('http://127.0.0.1:8000' + props.publicinfo['photo']['person_photo'])
            : props.getInfo()
    }, [props.load])

    return (props.load) ?
        <Card
            title="Информация об аккаунте"
            align="middle"
            style={{
                width: '80%',
                boxSizing: 'border-box'
            }}

            actions={[
                <SettingOutlined key="setting" onClick={() => navigate('/profile-setting')} />,
                <EditOutlined key="edit" onClick={() => navigate('/settings-edit')} />,
            ]}
        >
            <Avatar
                style={{
                    width: '30%',
                    height: '30%'
                }}
                src={profileImage}
                onClick={() => navigate('/settings-edit/image')}
            />

            <ProfilePublicInfo
                info={[
                    { name: 'Полное имя', data: props.first_name + ' ' + props.last_name },
                    { name: 'Никнейм', data: props.username },
                    { name: 'Дата рождения', data: props.publicinfo.date_of_birth },
                    { name: 'Пол', data: props.publicinfo.person_gender },
                    { name: 'Информация о себе', data: props.publicinfo.summary },
                ]}
                logo='Основная информация'
                key='public'
            />

            <ProfilePublicInfo
                info={[
                    { name: 'Страна', data: props.publicinfo['country'] },
                    { name: 'Университет', data: props.publicinfo['place_of_study'] },
                    { name: 'Дата окончания', data: props.publicinfo['release_date'] },
                ]}
                logo='Место учебы'
                key='study'
            />

            <ProfilePublicInfo
                info={[
                    { name: 'Email', data: props.email },
                ]}
                logo='Личная информация'
                key='email'
            />
        </Card> :
        <Card
            style={{
                width: '80%',
                boxSizing: 'border-box'
            }}
            loading={true}
        />

}
export default ProfileInfoForm
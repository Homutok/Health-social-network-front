import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;

const ShowLogout = (props) => {

    const navigate = useNavigate();

    confirm({
        title: 'Вы действительно хотите выйти из своего аккаунта ?',
        icon: <ExclamationCircleOutlined />,
        content: 'Мы будем скучать...',

        onOk() {
            props.logout()
            navigate('/login')
        },

        onCancel() {
            navigate('/profile')
        },
    });
};

export default ShowLogout
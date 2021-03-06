import React, { useEffect, useState, useRef } from 'react';
import { Card, Input, Space, Button, Tooltip, notification, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = (props) => {
    const [errorStatus, setStatusError] = useState([]);

    const navigate = useNavigate();

    let username = useRef(null);
    let password = useRef(null);
    let password2 = useRef(null);

    useEffect(() => {
        if (props.userLoginStatus.errors !== null) {
            notification.open({
                message: 'Error',
                description: props.userLoginStatus.errors,
                icon: <WarningOutlined />
            });
            setStatusError("error")
        }
    }, [props.userLoginStatus.isAuth])

    const login = () => {
        props.login()
    }

    const register = () => {
        password.current.input.value === password2.current.input.value
            ? props.register(username.current.input.value, password.current.input.value)
            : notification.open({
                message: 'Ошибка',
                description: 'Пароли должны совпадать',
                icon: <WarningOutlined />
            });
    }

    if (props.userLoginStatus.isAuth) navigate('/profile')
    return <Space direction='vertical' wrap style={{ width: '100%' }}>
        <Row type="flex" justify="center" align="middle" >
            <Card
                hoverable
                title="Регистрация"
                align="middle"
                style={{
                    width: '50%',
                }}
            >
                <Input.Group compact>
                    <Input
                        placeholder="Enter your username"
                        ref={username}
                        prefix={<UserOutlined />}
                        status={errorStatus}
                        suffix={
                            <Tooltip title="Login: admin ; Password: admin">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                    <Input.Password
                        placeholder="Input password"
                        ref={password}
                        status={errorStatus}
                        prefix={<LockOutlined />}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Input.Password
                        placeholder="Input password again"
                        ref={password2}
                        status={errorStatus}
                        prefix={<LockOutlined />}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <hr />
                    <Button
                        type="primary"
                        style={{
                            width: 'calc(100%)'
                        }}
                        onClick={register}
                    >
                        Регистрация
                    </Button>
                </Input.Group>
            </Card>
        </Row>
    </Space>
}
export default RegisterComponent
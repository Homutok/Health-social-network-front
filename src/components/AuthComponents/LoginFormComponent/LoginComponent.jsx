import React, { useEffect, useState, useRef } from 'react';
import { Card, Input, Space, Button, Tooltip, notification, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [errorStatus, setStatusError] = useState([]);

    const navigate = useNavigate();

    let username = useRef(null);
    let password = useRef(null);

    useEffect(() => {
        if (props.userLoginStatus.errors !== null) {
            notification.open({
                message: 'Error',
                description: props.userLoginStatus.errors,
                icon: <WarningOutlined />
            });
            setStatusError("error")
        }
    }, [props.userLoginStatus])

    const login = () => {
        props.login(username.current.input.value, password.current.input.value)
    }

    if (props.userLoginStatus.isAuth) navigate('/profile')
    return <Space direction='vertical' wrap style={{ width: '100%' }}>
        <Row type="flex" justify="center" align="middle" >
            <Card
                hoverable
                title="Авторизация"
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
                    <hr />
                    <Button
                        type="primary"
                        style={{
                            width: 'calc(100%)'
                        }}
                        onClick={login}
                    >
                        Войти
                    </Button>
                </Input.Group>
                <Row> Если у вас нет аккаунта, то вы можете
                    <Link to={'/register'}>
                        зарегистрироваться
                    </Link>
                </Row>
            </Card>
        </Row>
    </Space>
}
export default Login
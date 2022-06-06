import './SiderForm.css';
import { useState } from 'react';
import { Layout, Menu, BackTop } from 'antd';
import { useNavigate } from "react-router-dom";
import {
    SmileOutlined,
    CompassOutlined,
    UserOutlined,
    PushpinOutlined,
    SettingOutlined,
    HddOutlined,
    InsertRowAboveOutlined,
    FireOutlined,
    LockOutlined,
    CoffeeOutlined,
    BarsOutlined,
    HeartOutlined,
    DingtalkOutlined,
    PoweroffOutlined,
    CheckCircleOutlined,
    UpCircleOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const getItem = (label, key, icon, children) => (
    {
        key,
        icon,
        children,
        label
    }
)

const items = [
    getItem('Профиль', 'profile', <UserOutlined />),
    getItem('Избранное', 'favourite', <PushpinOutlined />),
    getItem('Дневники', 'diaries', <SmileOutlined />, [
        getItem('Цели и задачи', 'todo', <CheckCircleOutlined />),
        getItem('Дневник здоровья', 'health', <HeartOutlined />),
        getItem('Дневник тренировок', 'training', <InsertRowAboveOutlined />),
        getItem('Дневник питания', 'food', < HddOutlined />),
    ]),
    getItem('Новости', 'blog', <CompassOutlined />, [
        getItem('Все', 'all', < DingtalkOutlined />),
        getItem('Фитнес', 'fitnes', <FireOutlined />),
        getItem('Рецепты', 'recipe', <CoffeeOutlined />),
    ]),
    getItem('Настройки', 'settings', <SettingOutlined />, [
        getItem('Общие настройки', 'general', <BarsOutlined />),
        getItem('Безопасность', 'security', <LockOutlined />),
    ]),
    getItem('Выход', 'exit', <PoweroffOutlined />),
];

const SiderForm = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const navigate = useNavigate();

    const onClickLink = (e) => {
        (e.keyPath.length === 1) ? navigate(e.keyPath[0]) : navigate(`${e.keyPath[1]}-${e.keyPath[0]}`)
    };

    if (props.userLoginStatus.isAuth)
        return <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="logo" />
            <Menu
                theme='dark'
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                onClick={onClickLink}
            />
            <BackTop
                style={{
                    height: 40,
                    width: 40,
                    lineHeight: '40px',
                    borderRadius: 4,
                    backgroundColor: '#1088e9',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                }}
            >
                <UpCircleOutlined />
            </BackTop>
        </Sider>
}
export default SiderForm
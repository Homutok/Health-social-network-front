import { useEffect, useState } from 'react';
import { Row, Col, Typography, Card } from 'antd';

const { Title, Text } = Typography;

const ProfilePublicInfo = (props) => {
    const [profileInfo, setProfileInfo] = useState([]);
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        setProfileInfo(props.info)
        setLogo(props.logo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.info])

    return <Card
        style={{
            width: '80%',
            boxSizing: 'border-box'
        }}
    >
        <Title level={3} >{logo}</Title>
        <br />
        {
            profileInfo.map((info) => <Row
                key={info.name}
            >
                <Col span={12}>
                    <Text strong>
                        {info.name}:
                    </Text>
                </Col>
                <Col span={12}>
                    {info.data}
                </Col>
            </Row>
            )
        }
        <hr />
    </ Card>

}
export default ProfilePublicInfo
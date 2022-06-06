import { Card } from "antd";
import {
    TrophyOutlined
} from '@ant-design/icons';
import { useEffect, useState } from "react";

const AchivmentsForm = (props) => {
    const [achievementsInfo, setAchievementsInfo] = useState([]);

    useEffect(() => {
        (props.isLoad) ?
            setAchievementsInfo(props.achievInfo)
            : props.getInfo()
    }, [props.isLoad])

    return props.isLoad ?
        <Card
            hoverable
            title="Информация о достижениях"
            bodyStyle={{ padding: '50px' }}
            align="middle"
            style={{
                width: '40%',
                boxSizing: 'border-box'
            }}
        >
            {achievementsInfo.map((achiev) => (
                <p key={achiev.id}><TrophyOutlined /><b>{achiev.achievement_data}</b></p>
            ))}
        </Card>
        : <Card
            hoverable
            bodyStyle={{ padding: '50px' }}
            align="middle"
            style={{
                width: '40%',
                boxSizing: 'border-box'
            }}
            loading={true}
        />

}
export default AchivmentsForm
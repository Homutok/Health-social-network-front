import { Card } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HealthForm = (props) => {
    const [healthInfo, setHealthInfo] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        props.isLoad ?
            setHealthInfo(props.healthInfo.results[0])
            : props.getInfo()
    }, [props.isLoad])

    return props.isLoad ?
        <Card
            hoverable
            title="Информация о здоровье за последний день"
            bodyStyle={{ padding: '50px' }}
            align="middle"
            style={{
                width: '40%',
            }}
            onClick={() => { navigate('/diaries-health') }}
        >
            <div onClick={() => { navigate('/diaries-health') }}>
                <p><b>Дата измерения:</b> {healthInfo.date_of_check}</p>
                <p><b>Шаги: </b>{healthInfo.person_steps_per_day}шагов</p>
                <p><b>Вес:</b> {healthInfo.person_weight} кг</p>
                <p><b>Пульс:</b> {healthInfo.person_pulse} ударов/мин</p>
                <p><b>Сон:</b> {healthInfo.person_dream} часов</p>
            </div>
        </Card>
        : <Card
            hoverable
            bodyStyle={{ padding: '50px' }}
            align="middle"
            style={{
                width: '40%',
            }}
            loading={!props.isLoad}
        />

}
export default HealthForm
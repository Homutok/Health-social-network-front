import { Card } from "antd";
import { useEffect, useState } from "react";

const HealthPerDay = (props) => {

    const [isLoaded, setLoad] = useState(false);

    const [dataOfDay, setDataOfDay] = useState({});

    useEffect(() => {
        setDataOfDay(props.data)
    }, [])

    return <Card>
        <p><b>Дата измерения:</b> {dataOfDay.date_of_check}</p>
        <p><b>Шаги: </b>{dataOfDay.person_steps_per_day} шагов</p>
        <p><b>Вес:</b> {dataOfDay.person_weight} кг</p>
        <p><b>Пульс:</b> {dataOfDay.person_pulse} ударов/мин</p>
        <p><b>Сон:</b> {dataOfDay.person_dream} часов</p>
    </Card>
}
export default HealthPerDay
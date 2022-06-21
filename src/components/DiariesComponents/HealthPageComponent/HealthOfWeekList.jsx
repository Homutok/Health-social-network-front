import { Space } from "antd";
import { useEffect, useState } from "react";
import HealthAddCard from "./HealthAddCard";
import HealthPerDay from "./HealthPerDay";

const HealthOfWeekList = (props) => {

  const [dataOfWeek, setDataOfWeek] = useState([]);

  useEffect(() => {
    setDataOfWeek(props.data)
  }, [props.data])

  return <Space>
    <HealthAddCard posthealthInfo={props.posthealthInfo} />
    {
      dataOfWeek.map((dataPerDay) => <HealthPerDay data={dataPerDay} key={dataPerDay.id} />)
    }
  </Space>
}
export default HealthOfWeekList
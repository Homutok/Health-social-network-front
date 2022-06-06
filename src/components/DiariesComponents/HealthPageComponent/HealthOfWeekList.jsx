import { Space } from "antd";
import { useEffect, useState } from "react";
import HealthPerDay from "./HealthPerDay";

const HealthOfWeekList = (props) => {

  const [isLoaded, setLoad] = useState(false);

  const [dataOfWeek, setDataOfWeek] = useState([]);

  useEffect(() => {
    setDataOfWeek(props.data)
  }, [])

  return <Space>
    {
      dataOfWeek.map((dataPerDay) => <HealthPerDay data={dataPerDay} key={dataPerDay.id}/>)
    }
  </Space>
}
export default HealthOfWeekList
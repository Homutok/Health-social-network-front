import { Collapse } from "antd";
import { useEffect, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import HealthStatChart from "./HealthChart";

const HealthChartList = (props) => {
    const { Panel } = Collapse;

    const [dataOfHealth, setDataOfHealth] = useState([]);

    useEffect(() => {
        setDataOfHealth(props.data)
    }, [props.isLoad])

    return <Collapse>
        {
            dataOfHealth.map((dataOfStat) =>
                <Panel header={"Показать график изменения ваших показателей по " + dataOfStat.title} key={dataOfStat.title} extra={<SettingOutlined />}>
                    <HealthStatChart data={dataOfStat.data} isLoad={props.isLoad} />
                </Panel>)
        }

    </Collapse>
}
export default HealthChartList
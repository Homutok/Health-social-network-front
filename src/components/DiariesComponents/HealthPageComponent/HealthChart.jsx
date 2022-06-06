import { useEffect, useState } from "react";
import { Line } from '@ant-design/plots';

const HealthStatChart = (props) => {

    const [dataChart, setDataChart] = useState([])

    useEffect(() => {
        setDataChart(props.data)
    }, [props.data])

    const config = {
        data: dataChart,
        xField: 'date',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    return <Line {...config} />

}
export default HealthStatChart
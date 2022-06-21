import { Input } from "antd";

const NutrientWeightInfo = (props) => {

    return <Input
        style={{
            width: '12%'
        }}
        key={props.id}
        value={(props.amount) * props.weight / 100}
        prefix={props.name}
        suffix={props.measure}
    />
}
export default NutrientWeightInfo
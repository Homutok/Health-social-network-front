import { LoadingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { Nutrients } from "./NutrientsConst";
import NutrientWeightInfo from "./NutrientWeightInfo";


const NutrientInfo = (props) => {
    const [nutrientList, setNutrientList] = useState([]);
    const [weight, setWeight] = useState(100);
    const [isLoad, setLoading] = useState(false);

    let weightElement = useRef(100);

    useEffect(() => {
        setWeight(props.weight)
        setNutrientList(props.selectData)
        setLoading(!!props.selectData[0])
    }, [props.selectData, props.weight])

    const changeInput = () => {
        props.changeWeight(props.id, weightElement.current.input.value)
    }

    return isLoad ? <>
        <Input
            style={{
                width: '13%'
            }}
            key={'weight'}
            ref={weightElement}
            type="number"
            defaultValue={100}
            prefix='Вес'
            onChange={() => { changeInput() }}
        />
        {/* Сделать нормально, а не ленивым способом !!! */}
        {
            Nutrients.map((nutrient, index) => 
                <NutrientWeightInfo
                    key={nutrient.key}
                    id={nutrient.key}
                    name={nutrient.name}
                    amount={nutrientList[index].amount}
                    weight={weight}
                    measure={nutrient.measure}
                />
            )
        }
    </>
        : <Input
            style={{
                width: '13%'
            }}
            prefix={<LoadingOutlined />}
        />

}
export default NutrientInfo
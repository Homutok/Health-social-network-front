import { Card, Input } from "antd";
import { useEffect, useState } from "react";
import AddFoodButton from "./AddFoodButton";
import { Nutrients } from "./NutrientsConst";
import NutrientWeightInfo from "./NutrientWeightInfo";

const FoodTotal = (props) => {

    const [nutrients, setNutrients] = useState([]);
    const [weightTotal, setWeightTotal] = useState();

    useEffect(() => {
        let bufferItems = []

        props.selectData[0].map(() => bufferItems.push(0))

        setWeightTotal(props.weights.reduce((acc, val) => +acc + +val, 0))

        props.selectData.map((selectFood) => {
            selectFood.map((Nutrients, index) => {
                bufferItems[index] += Nutrients.amount
            })

            setNutrients(bufferItems.map((items) => items / props.selectData.length))
        })
    }, [props.selectData, props.weights])

    return <Card>
        <Input
            style={{
                width: '30%'
            }}
            key={'total'}
            prefix='ИТОГО'
            value={''}
        />
        <Input
            style={{
                width: '13%'
            }}
            key={'weight-total'}
            prefix='Вес'
            value={weightTotal}
        />
        {
            Nutrients.map((nutrient, index) =>
                <NutrientWeightInfo
                    key={nutrient.key + '-total'}
                    id={nutrient.key + '-total'}
                    name={nutrient.name}
                    amount={nutrients[index]}
                    weight={weightTotal}
                    measure={nutrient.measure}
                />
            )
        }
        <AddFoodButton addNew={props.addNew} />
    </Card>
}
export default FoodTotal
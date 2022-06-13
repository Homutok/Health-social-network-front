import { Card, Input, Space } from "antd";
import { useEffect, useState } from "react";
import AddFoodButton from "./AddFoodButton";

const FoodTotal = (props) => {

    const [isLoaded, setLoad] = useState(false);
    const [nutrients, setNutrients] = useState([]);

    const { Meta } = Card;

    useEffect(() => {
        let bufferItems = []
        props.selectData[0].map(() => bufferItems.push(0))

        props.selectData.map((selectFood) => {
            selectFood.map((Nutrients, index) => {
                bufferItems[index] += Nutrients.amount
            })
            setNutrients(bufferItems)
        })
    }, [props.selectData])

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
            key={'weight'}
            prefix='Вес'
            value={nutrients[0]}
        />
        {/* Сделать нормально, а не ленивым способом !!! */}
        <Input
            style={{
                width: '12%'
            }}
            key={'protein'}
            prefix='Белок'
            suffix="г"
            value={nutrients[0]}
        />
        <Input
            style={{
                width: '12%'
            }}
            key={'Total lipid (fat)'}
            prefix='Жиры'
            suffix="г"
            value={nutrients[1]}
        />
        <Input
            style={{
                width: '13%'
            }}
            key={'	Carbohydrate'}
            prefix='Углеводы'
            suffix="г"
            value={nutrients[2]}
        />
        <Input
            style={{
                width: '15%'
            }}
            key={'Energy'}
            prefix='Энергия'
            suffix="ккал"
            value={nutrients[3]}
        />
        <AddFoodButton addNew={props.addNew} />
    </Card>
}
export default FoodTotal
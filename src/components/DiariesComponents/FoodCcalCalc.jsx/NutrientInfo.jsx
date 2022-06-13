import { LoadingOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useEffect, useRef, useState } from "react";


const NutrientInfo = (props) => {
    const [nutrientList, setNutrientList] = useState([]);
    const [weight, setWeight] = useState(100);
    const [isLoad, setLoading] = useState(false);

    let weightElement = useRef(100);

    useEffect(() => {
        setNutrientList(props.selectData)
        setLoading(!!props.selectData[0])
    }, [props.selectData])

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
            onChange={()=>{setWeight(weightElement.current.input.value)}}
        />
        {/* Сделать нормально, а не ленивым способом !!! */}
        <Input
            style={{
                width: '12%'
            }}
            key={'protein'}
            value={(nutrientList[0].amount)*weight/100}
            prefix='Белок'
            suffix="г" 
        />
        <Input
            style={{
                width: '12%'
            }}
            key={'Total lipid (fat)'}
            value={(nutrientList[1].amount)*weight/100}
            prefix='Жиры'
            suffix="г" 
        />
        <Input
            style={{
                width: '13%'
            }}
            key={'	Carbohydrate'}
            value={(nutrientList[2].amount)*weight/100}
            prefix='Углеводы'
            suffix="г" 
        />
        <Input
            style={{
                width: '15%'
            }}
            key={'Energy'}
            value={(nutrientList[3].amount)*weight/100}
            prefix='Энергия'
            suffix="ккал" 
        />
    </>
        : <Input
            style={{
                width: '13%'
            }} 
            prefix={<LoadingOutlined/>}
            />

}
export default NutrientInfo
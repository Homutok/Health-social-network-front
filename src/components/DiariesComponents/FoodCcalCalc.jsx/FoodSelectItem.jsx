import { TreeSelect } from "antd";
import { useEffect, useState } from "react";

const FoodSelectItem = (props) => {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        setFoodList(props.data)
    }, [props.data])

    const onChangeSearchItem = (value) => {
        props.search(value)
        setFoodList([{ value: value, food_name: 'Идет загрузка...' }])
    }

    const onChangeSelectItem = (value) => {
        if (!!value) {
            const found = foodList.find(data => (data.value === value.value));
            props.select(found.id, props.id)
        }
        setFoodList([{ value: 'value', food_name: 'Идет загрузка...' }])
    }

    return <TreeSelect
        treeData={foodList}
        showSearch
        style={{
            width: '30%'
        }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Введите продукт"
        allowClear
        treeDefaultExpandAll
        onSearch={onChangeSearchItem}
        onChange={onChangeSelectItem}
        labelInValue

    />
}
export default FoodSelectItem
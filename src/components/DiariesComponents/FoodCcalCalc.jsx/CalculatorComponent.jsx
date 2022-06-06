import { Card, Space } from "antd";
import { useEffect, useState } from "react";
import FoodInput from "./FoodInput";
import FoodTotal from "./FoodTotal";

const CalculatorComponent = (props) => {

    useEffect(() => {
    }, [props.isLoad])

    return <Card
        title='Калькулятор расчета готовых продуктов'
    >
        Введите в таблицу состав блюда – названия продуктов и их вес.
        <FoodInput
            data={props.dataList}
            selectData={props.selectedItems} 
            search={props.change_search}
            select={props.get_food_info}
            />
        <FoodTotal />
    </Card>
}
export default CalculatorComponent
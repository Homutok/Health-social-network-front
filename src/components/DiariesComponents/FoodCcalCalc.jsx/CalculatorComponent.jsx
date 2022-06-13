import { Card, Space } from "antd";
import { useEffect, useState } from "react";
import AddFoodButton from "./AddFoodButton";
import FoodInput from "./FoodInput";
import FoodTotal from "./FoodTotal";

const CalculatorComponent = (props) => {

    useEffect(() => {
    }, [props.isLoad])

    return <Card
        title='Калькулятор расчета готовых продуктов'
    >
        <Card>
            Введите в таблицу состав блюда – названия продуктов и их вес.
            {props.selectedItems.map((selectFood, index) =>
                <FoodInput
                    key={index}
                    id={index}
                    data={props.dataList}
                    selectData={selectFood}
                    search={props.change_search}
                    select={props.get_food_info}
                    deleteItem={props.delete_search}
                />)}
        </Card>
        <FoodTotal addNew={props.add_new_search} selectData={props.selectedItems}/>
    </Card>
}
export default CalculatorComponent
import { Card } from "antd";
import { useEffect } from "react";
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
                    weight={props.weightList[index]}
                    changeWeight={props.change_weight}
                />)}
        </Card>
        <FoodTotal
            weights={props.weightList}
            addNew={props.add_new_search}
            selectData={props.selectedItems} />
    </Card>
}
export default CalculatorComponent
import { Row } from "antd";
import { useEffect } from "react";
import FoodSelectItem from "./FoodSelectItem";
import NutrientInfo from "./NutrientInfo";
import RemoveFoodButton from "./RemoveFoodButton";

const FoodInput = (props) => {

    useEffect(() => {

    }, [props.data])

    return <Row>
        <FoodSelectItem
            id={props.id}
            data={props.data}
            search={props.search}
            select={props.select}
            selectData={props.selectData}
        />
        <NutrientInfo
            id={props.id}
            weight={props.weight}
            selectData={props.selectData}
            changeWeight={props.changeWeight} />
        <RemoveFoodButton
            id={props.id}
            delete={props.deleteItem} />
    </Row>
}
export default FoodInput
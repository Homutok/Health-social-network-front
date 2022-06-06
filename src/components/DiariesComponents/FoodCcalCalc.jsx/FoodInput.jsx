import { Card, Row } from "antd";
import { useEffect} from "react";
import AddFoodButton from "./AddFoodButton";
import FoodSelectItem from "./FoodSelectItem";
import NutrientInfo from "./NutrientInfo";
import RemoveFoodButton from "./RemoveFoodButton";

const FoodInput = (props) => {

    useEffect(() => {

    }, [props.data])

    return <Card>
        <Row>
            <FoodSelectItem
                data={props.data}
                search={props.search}
                select={props.select}
            />
            <NutrientInfo selectData={props.selectData}/>
            {/* <AddFoodButton />
            <RemoveFoodButton /> */}
        </Row>
    </Card>
}
export default FoodInput
import { Card, Input, Space } from "antd";
import { useEffect, useState } from "react";

const FoodTotal = (props) => {

    const [isLoaded, setLoad] = useState(false);

    const { Meta } = Card;

    useEffect(() => {
    }, [props.isLoad])

    return <Card></Card>
}
export default FoodTotal
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect } from "react";


const AddFoodButton = (props) => {

    useEffect(() => {

    }, [])

    return <Button onClick={props.addNew} >
        <PlusCircleOutlined />
    </Button>

}
export default AddFoodButton
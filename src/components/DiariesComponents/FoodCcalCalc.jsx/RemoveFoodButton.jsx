import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect } from "react";


const RemoveFoodButton = (props) => {

    useEffect(() => {

    }, [])

    return <Button onClick={() => props.delete(props.id)}>
        <CloseCircleOutlined />
    </Button>

}
export default RemoveFoodButton
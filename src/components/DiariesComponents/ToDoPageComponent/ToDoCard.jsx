import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useEffect, useState } from "react";

const ToDoCard = (props) => {

    const [todo, setTodo] = useState(false);

    useEffect(() => {
        setTodo(props.data)
    }, [props.data])

    return todo ?
        <Card
            style={{
                width: '250px',
                boxSizing: 'border-box'
            }}
            title={todo.task_name}
            actions={[
                <CheckCircleOutlined key="complete" />,
                <CloseCircleOutlined key="delete" />,
            ]}
        >
            {todo.task_summary}
        </Card> :
        <Card
            loading={true}
        />
}
export default ToDoCard
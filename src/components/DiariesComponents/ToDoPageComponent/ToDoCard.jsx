import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import { useEffect, useState } from "react";

const ToDoCard = (props) => {
    const { Text, Link } = Typography;
    const [todo, setTodo] = useState(false);

    useEffect(() => {
        setTodo(props.data)
    }, [props.data])

    const completeTodo = (id) => {
        props.complete(id)
    }
    const deleteToDo = (id) => {
        props.delete(id)
    }

    return todo ?
        <Card
            style={{
                width: '250px',
                boxSizing: 'border-box'
            }}
            title={todo.complete_stage
                ? <Text delete>{todo.task_name}</Text>
                : <Text >{todo.task_name}</Text>
            }
            actions={
                !todo.complete_stage
                    ? [
                        <CheckCircleOutlined key="complete" onClick={() => completeTodo(props.id)} />,
                        <CloseCircleOutlined key="delete" onClick={() => deleteToDo(props.id)} />,
                    ]
                    : [
                        <CloseCircleOutlined key="delete" onClick={() => deleteToDo(props.id)} />,
                    ]
            }
        >

            {todo.complete_stage
                ? <Text delete>{todo.task_summary}</Text>
                : <Text >{todo.task_summary}</Text>
            }
        </Card> :
        <Card
            loading={true}
        />
}
export default ToDoCard
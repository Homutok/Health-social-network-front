import { Card } from "antd";

const ToDoCard = (props) => {
    return <Card
        style={{
            width: '250px',
            boxSizing: 'border-box'
        }}
        title={props.title}
    >
        {props.content}
    </Card>
}
export default ToDoCard
import { CheckCircleOutlined, CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Card, Input, Row } from "antd"
import { useRef } from "react"
import { useState } from "react"

const TodoAddCard = (props) => {
    const [editable, setEditable] = useState(false)
    const { TextArea } = Input;

    const label = useRef()
    const text = useRef()

    const completeNewText = () => {
        props.createNewToDo(
            label.current.input.value,
            text.current.resizableTextArea.props.value,)
        setEditable(false)
    }

    return <Card
        hoverable
        style={{
            width: '250px',
            boxSizing: 'border-box'
        }}
        title={
            editable
                ? <Input placeholder="Введите название" ref={label} />
                : "Добавить новую задачу"
        }
        actions={editable
            ? [
                <CheckCircleOutlined onClick={() => completeNewText()} />,
                <CloseCircleOutlined onClick={() => setEditable(false)} />
            ]
            : [
                <></>
            ]}
    >
        <Row align="center">
            {editable
                ? <TextArea placeholder="Введите текст" ref={text} />
                : <Button shape="round" type="primary" onClick={() => setEditable(true)}>
                    <PlusCircleOutlined />
                </Button >

            }

        </Row>
    </Card>
}
export default TodoAddCard
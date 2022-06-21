import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { useEffect, useRef } from "react";
import { useState } from "react";
import ExercieAddModal from "./ExercieAddModal"

const ExerciseActions = (props) => {
    const [visible, setVisible] = useState(false);
    const exercieText = useRef()

    useEffect(() => {

    }, [props.editable])

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };
    const addNewExercise = () => {
        props.addExercise(props.id, exercieText.current.input.value)
        setVisible(false);
    };

    return <Space>
        <Button shape="round" type="primary" onClick={() => showModal()}>
            <PlusCircleOutlined />
        </Button>
        <Button shape="round" type="dashed" onClick={() => { props.editable ? props.hideEdit() : props.showEdit() }}>
            <EditOutlined />
        </Button>
        <ExercieAddModal
            addNewExercise={addNewExercise}
            exercieText={exercieText}
            visible={visible}
            showModal={showModal}
            hideModal={hideModal}
        />
    </Space>
}
export default ExerciseActions
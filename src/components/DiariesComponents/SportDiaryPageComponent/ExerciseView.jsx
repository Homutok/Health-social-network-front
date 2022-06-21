import { CloseCircleOutlined } from "@ant-design/icons";
import { Alert, Button } from "antd";
import { useEffect } from "react";

const ExerciseView = (props) => {
    useEffect(() => {
    }, [props.editable])

    const deleteExercise = (value) => {
        props.deleteExercise(value)
        props.hideEdit()
    }

    if (props.dataList !== undefined)
        return props.editable ?
            props.dataList.map((item) => (
                !!item.exercise
                    ? item.exercise === 'Отдых'
                        ? <Alert type="warning" message={item.exercise} key={item.id}></Alert>
                        : <Alert type="info" message={item.exercise} key={item.id}></Alert>
                    : item.exercise_text === 'Отдых'
                        ? <Alert type="warning" message={item.exercise_text} key={item.id}></Alert>
                        : <Alert type="success" message={item.exercise_text} key={item.id}></Alert>
            ))
            : props.dataList.map((item) => (
                !!item.exercise
                    ? <Button danger key={item.id} onClick={() => deleteExercise(item.id)}>
                        {item.exercise} <CloseCircleOutlined />
                    </Button>
                    : <Button danger key={item.id} onClick={() => deleteExercise(item.id)}>
                        {item.exercise_text}<CloseCircleOutlined />
                    </Button>
            ))
}
export default ExerciseView
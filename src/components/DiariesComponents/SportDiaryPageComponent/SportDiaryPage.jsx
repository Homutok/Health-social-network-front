import { Table } from "antd";
import { useEffect, useState } from "react";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";
import ExerciseActions from "./ExerciseActions";
import ExerciseView from "./ExerciseView";
import { columns, days } from "./SportDiaryConstants";

const SportDiaryForm = (props) => {
    const [data, setData] = useState([])
    const [editable, setEditable] = useState(true)

    useEffect(() => {
        props.isLoad
            ? setDataToDays()
            : props.get_sports_info()
    }, [props.isLoad, props.sportList, editable])

    const showEdit = () => {
        setEditable(true)
    }
    const hideEdit = () => {
        setEditable(false)
    }

    const setDataToDays = () => {
        setData(days.map((day) => ({
            key: day['key'],
            Days: day['name'],
            Exercise: <ExerciseView
                dataList={props.sportList[day['key']]}
                hideEdit={hideEdit}
                editable={editable}
                deleteExercise={props.delete_sports_info}
            />,
            actions: <ExerciseActions
                editable={editable}
                showEdit={showEdit}
                hideEdit={hideEdit}
                id={day['key']}
                addExercise={props.add_sports_info}
            />
        })))
    }

    return <PageBreadCrumb
        parent='Дневники'
        child='Дневник тренировок'
    >
        <Table columns={columns} dataSource={data} />;
    </PageBreadCrumb>;
}
export default SportDiaryForm
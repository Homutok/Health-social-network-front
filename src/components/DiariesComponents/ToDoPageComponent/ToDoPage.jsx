import { Space } from "antd";
import { useEffect, useState } from "react";
import Loading from "../../OtherComponents/LoadingPage";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb"
import TodoAddCard from "./ToDoAddCard";
import ToDoCard from "./ToDoCard";


const ToDoForm = (props) => {

    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
        props.getToDoInfo();
        setLoad(props.isLoad)
    }, [props.isLoad])


    return isLoaded ?
        <PageBreadCrumb
            parent='Дневники'
            child='Цели и задачи'
        >
            <Space direction="horizontal" size={[8, 16]} wrap style={{ display: 'flex' }}>
                <TodoAddCard createNewToDo={props.createNewToDo} />
                {
                    props.todoList.map((todoPost) => (
                        <ToDoCard
                            data={todoPost}
                            key={todoPost.id}
                            id={todoPost.id}
                            complete={props.completeNewToDo}
                            delete={props.deleteToDo}
                        />
                    ))}
            </Space>
        </PageBreadCrumb> :
        <Loading />
}
export default ToDoForm
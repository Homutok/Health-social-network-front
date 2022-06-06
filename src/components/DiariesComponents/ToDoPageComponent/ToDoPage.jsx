import { Space } from "antd";
import { useEffect, useState } from "react";
import Loading from "../../OtherComponents/LoadingPage";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb"
import ToDoCard from "./ToDoCard";


const ToDoForm = (props) => {

    const [isLoaded, setLoad] = useState(false);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        props.getToDoInfo();
        setLoad(props.isLoad)
        setTodoList(props.todoList)
    }, [props.isLoad])


    return isLoaded ?
        <PageBreadCrumb
            parent='Дневники'
            child='Цели и задачи'
        >
            <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
                {
                    todoList.map((todoPost) => (
                        <ToDoCard
                            data={todoPost}
                            key={todoPost.id}
                        />
                    ))}
            </Space>
        </PageBreadCrumb> :
        <Loading />
}
export default ToDoForm
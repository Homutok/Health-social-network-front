import { connect } from 'react-redux';
import { addToDoData, completeToDoData, deleteToDoData, getToDoDataList } from '../../../.store/api/Diarys/todo-api';
import ToDoForm from './ToDoPage';

function mapStateToProps(state) {
    return {
        todoList: state.todo.todoList,
        isLoad: state.todo.isLoaded,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getToDoInfo: () => {
            dispatch(getToDoDataList())
        },
        createNewToDo: (label, text) => {
            dispatch(addToDoData(label, text))
        },
        deleteToDo: (id) => {
            dispatch(deleteToDoData(id))
        },
        completeNewToDo: (id) => {
            dispatch(completeToDoData(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
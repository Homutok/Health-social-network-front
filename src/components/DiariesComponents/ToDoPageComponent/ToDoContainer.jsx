import { connect } from 'react-redux';
import { getToDoDataList } from '../../../.store/api/Diarys/todo-api';
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
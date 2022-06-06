import { combineReducers } from 'redux'
import blogReducer from './Blog/blog-reducer'
import photoReducer from './User/photo-reducer'
import loginReducer from './User/login-reducer'
import profileReducer from './User/profile-reducer'
import todoReducer from './Diarys/todo-reducer'
import healthReducer from './Diarys/health_list-reducer'
import foodReducer from './Food/food-reducer'

export default combineReducers({
    blog: blogReducer,
    photo: photoReducer,
    profile: profileReducer,
    todo: todoReducer,
    login: loginReducer,
    health: healthReducer,
    food:foodReducer
})
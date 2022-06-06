import { useEffect } from "react";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb"
import Login from "./LoginComponent";


const LoginForm = (props) => {
    useEffect(() => {
    })
    return <PageBreadCrumb
        parent='Профиль'
        child='Авторизация'
    >
        <Login
            userLoginStatus={props.userLoginStatus}
            login={props.login}
        />
    </PageBreadCrumb>;
}
export default LoginForm
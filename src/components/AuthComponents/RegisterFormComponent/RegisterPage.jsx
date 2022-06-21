import { useEffect } from "react";
import RegisterComponent from "./RegisterComponent";


const RegisterForm = (props) => {
    useEffect(() => {
    })
    return  <RegisterComponent
            userLoginStatus={props.userLoginStatus}
            register={props.register}
        />

}
export default RegisterForm
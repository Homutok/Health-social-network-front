import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

const AuthVerifyForm = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        props.verify()
    }, [props.userLoginStatus.isAuth])
    
    if ((!props.userLoginStatus.isAuth) && !props.userLoginStatus.loadAuth) {
        props.loginConfirm()
        navigate('/login')
    }
}
export default AuthVerifyForm
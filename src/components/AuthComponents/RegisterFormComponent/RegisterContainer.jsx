import { connect } from 'react-redux';
import { logIn, register } from '../../../.store/api/User/Authorization/login-api';
import RegisterForm from './RegisterPage';

function mapStateToProps(state) {
    return {
        userLoginStatus: state.login.isAuthData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register: (username, password, ) => {
            dispatch(register({ username: username, password: password }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
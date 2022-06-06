import { connect } from 'react-redux';
import { logIn } from '../../../.store/api/User/Authorization/login-api';

import LoginForm from './LoginPage';

function mapStateToProps(state) {
    return {
        userLoginStatus: state.login.isAuthData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(logIn({ username: username, password: password }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
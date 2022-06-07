import { connect } from 'react-redux';
import { loginConfirm, logout } from '../../../.store/actionCreators/User/LoginActionCreators';
import { verify } from '../../../.store/api/User/Authorization/login-api';
import AuthVerifyForm from './AuthVerifyForm';

function mapStateToProps(state) {
    return {
        userLoginStatus: state.login.isAuthData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        verify: () => {
            const refresh = localStorage.getItem("refresh");
            const access = localStorage.getItem("access");
            (refresh === null && access === null) ?
                dispatch(logout()) :
                dispatch(verify());
        },
        loginConfirm: () => {
            dispatch(loginConfirm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthVerifyForm);
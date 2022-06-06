import { connect } from 'react-redux';
import SiderForm from './SiderForm';

function mapStateToProps(state) {
    return {
        userLoginStatus: state.login.isAuthData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderForm);
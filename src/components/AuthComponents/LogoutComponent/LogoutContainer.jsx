import { connect } from 'react-redux';
import { logout } from '../../../.store/actionCreators/User/LoginActionCreators';
import ShowLogout from './Logout';


function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowLogout);
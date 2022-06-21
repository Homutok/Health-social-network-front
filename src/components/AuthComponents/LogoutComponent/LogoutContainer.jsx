import { connect } from 'react-redux';
import { sportListClear } from '../../../.store/actionCreators/Diarys/SportDiaryActionCreators';
import { toDoClear } from '../../../.store/actionCreators/Diarys/ToDoActionCreators';
import { logout } from '../../../.store/actionCreators/User/LoginActionCreators';
import { dataProfileClear } from '../../../.store/actionCreators/User/ProfileActionCreators';
import ShowLogout from './Logout';


function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(toDoClear())
            dispatch(sportListClear())
            dispatch(dataProfileClear())
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowLogout);
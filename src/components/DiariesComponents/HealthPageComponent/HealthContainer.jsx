import { connect } from 'react-redux';
import { getHealthList } from '../../../.store/api/Diarys/health_list-api';
import HealthStatPage from './HealthPage';

function mapStateToProps(state) {
    return {
        healthArray:state.health.healthDataArray,
        healthOfWeek: state.health.healthPerWeekList,
        isLoad: state.health.isLoaded,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        gethealthInfo: () => {
            dispatch(getHealthList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HealthStatPage);
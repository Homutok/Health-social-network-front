import { connect } from 'react-redux';
import { getHealthList, postHealth } from '../../../.store/api/Diarys/health_list-api';
import HealthStatPage from './HealthPage';

function mapStateToProps(state) {
    return {
        healthArray: state.health.healthDataArray,
        healthOfWeek: state.health.healthPerWeekList,
        isLoad: state.health.isLoaded,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        gethealthInfo: () => {
            dispatch(getHealthList())
        },
        posthealthInfo: (steps, weight, pulse, dream) => {
            dispatch(postHealth({
                person_steps_per_day: steps,
                person_weight: weight,
                person_pulse: pulse,
                person_dream: dream
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HealthStatPage);
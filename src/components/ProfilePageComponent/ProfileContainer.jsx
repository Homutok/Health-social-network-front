import { connect } from 'react-redux';
import { getAchievementsList } from '../../.store/api/User/ProfileForm/achievments-api';
import { getHealthLast } from '../../.store/api/User/ProfileForm/health_last-api';
import { getProfileData } from '../../.store/api/User/ProfileForm/profile-api';
import ProfilePage from './ProfilePage';


function mapStateToProps(state) {
    return {
        // userAuth: state.login.isAuthData.isAuth,
        profile: state.profile.dataProfile,
        health:state.profile.dataHealth,
        achievements:state.profile.dataAchievements,
        isLoadProfile: state.profile.isLoadedProfile,
        isLoadAchievements: state.profile.isLoadedAchievements,
        isLoadHealth: state.profile.isLoadedHealth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProfileInfo: () => {
            dispatch(getProfileData())
        },
        getAchievementsInfo: () => {
            dispatch(getAchievementsList())
        },
        getHealthInfo: () => {
            dispatch(getHealthLast())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
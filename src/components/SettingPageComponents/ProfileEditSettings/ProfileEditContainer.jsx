import { connect } from 'react-redux';
import { getProfileData } from '../../../.store/api/User/ProfileForm/profile-api';
import { changeProfileData } from '../../../.store/api/User/Setting/profile_edit-api';
import ProfileEdit from './ProfileEditPage';

function mapStateToProps(state) {
    return {
        profile: state.profile.dataProfile,
        isLoadProfile: state.profile.isLoadedProfile,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getProfileInfo: () => {
            dispatch(getProfileData())
        },
        updateProfileInfo: (id, date_of_birth, summary, person_gender, country, place_of_study, release_date) => {
        
            dispatch(changeProfileData({
                date_of_birth: date_of_birth,
                summary: summary,
                person_gender: person_gender,
                country: country,
                place_of_study: place_of_study,
                release_date: release_date
            },
                id
            ))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
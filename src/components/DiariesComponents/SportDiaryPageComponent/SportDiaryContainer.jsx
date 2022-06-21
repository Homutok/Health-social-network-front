import { connect } from 'react-redux';
import { addSport, deleteSport, getSportList } from '../../../.store/api/Diarys/sport-diary-api';

import SportDiaryForm from './SportDiaryPage';


function mapStateToProps(state) {
    return {
        sportList: state.sportDiary.sporthPerWeekList,
        isLoad: state.sportDiary.isLoaded,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        get_sports_info: () => {
            dispatch(getSportList());
        },
        add_sports_info: (dayid, text) => {
            dispatch(addSport({ day: dayid, exercise_text: text }));
        },
        delete_sports_info: (id) => {
            dispatch(deleteSport(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SportDiaryForm);
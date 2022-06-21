import _ from "lodash";
import {
    GET_SPORT_DATA_FAILURE,
    GET_SPORT_DATA_SUCCESS
} from "../../actions/Diarys/SportDiaryActions";


let initalState = {
    sporthPerWeekList: [],
    isLoaded: false
}
const sportDiaryReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_SPORT_DATA_SUCCESS:
            let data = _.groupBy(action.payload, 'day', 'desc')
            return {
                ...state,
                sporthPerWeekList: data,
                isLoaded: true
            };
        case GET_SPORT_DATA_FAILURE:
            return { ...state, isLoaded: false }
        default:
            return state;
    }
}
export default sportDiaryReducer;
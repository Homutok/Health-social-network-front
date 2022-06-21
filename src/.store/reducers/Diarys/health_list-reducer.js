import {
    GET_HEALTH_DATA_SUCCESS,
    GET_HEALTH_DATA_FAILURE
} from "../../actions/Diarys/HealthListActions"

let initalState = {
    healthPerWeekList: [[]],
    healthDataArray: [
        {
            title: "Вес",
            data: []
        }
    ],
    isLoaded: false
}
const healthReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_HEALTH_DATA_SUCCESS:
            let LoadDataList = action.payload.results.map((stats => stats))
            let LoadWeightData = action.payload.results.map((stats => ({
                date: stats.date_of_check,
                value: stats.person_weight
            })))
            let LoadDreamData = action.payload.results.map((stats => ({
                date: stats.date_of_check,
                value: stats.person_dream
            })))
            let LoadStepstData = action.payload.results.map((stats => ({
                date: stats.date_of_check,
                value: stats.person_steps_per_day
            })))
            return {
                ...state,
                healthPerWeekList: LoadDataList,
                healthDataArray: [
                    { title: "Вес", data: LoadWeightData },
                    { title: "Сон", data: LoadDreamData },
                    { title: "Шаги", data: LoadStepstData },
                ],
                isLoaded: true
            };
        case GET_HEALTH_DATA_FAILURE:
            return { ...state, isLoaded: false }
        default:
            return state;
    }
}
export default healthReducer;
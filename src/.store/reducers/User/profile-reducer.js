import { DATA_ACHIEVEMENTS_SUCCESS } from "../../actions/User/AchievementsActions";
import { DATA_LAST_HEALTH_FAILURE, DATA_LAST_HEALTH_SUCCESS } from "../../actions/User/HealthLastActions";
import {
    DATA_PROFILE_SUCCESS,
    DATA_PROFILE_FAILURE,
} from "../../actions/User/ProfileActions"


let initalState = {
    dataProfile: [],
    dataAchievements: [],
    dataHealth: {},
    isLoadedProfile: false,
    isLoadedAchievements: false,
    isLoadedHealth: false,
}
const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case DATA_PROFILE_SUCCESS:
            return {
                ...state,
                dataProfile: action.payload,
                isLoadedProfile: true
            };
        case DATA_PROFILE_FAILURE:
            alert(action.payload)
            return {
                ...state,
                isLoadedProfile: false
            }
        case DATA_ACHIEVEMENTS_SUCCESS:
            return {
                ...state,
                dataAchievements: action.payload,
                isLoadedAchievements: true
            }
        case DATA_PROFILE_FAILURE:
            return {
                ...state,
                isLoadedAchievements: false
            }
        case DATA_LAST_HEALTH_SUCCESS:
            return {
                ...state,
                dataHealth: action.payload,
                isLoadedHealth: true
            }
        case DATA_LAST_HEALTH_FAILURE:
            return {
                ...state,
                isLoadedHealth: false
            }
        default:
            return state;
    }
}
export default profileReducer;
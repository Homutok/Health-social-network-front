import { DATA_ACHIEVEMENTS_SUCCESS } from "../../actions/User/AchievementsActions";
import {
    DATA_LAST_HEALTH_FAILURE,
    DATA_LAST_HEALTH_SUCCESS
} from "../../actions/User/HealthLastActions";

import {
    DATA_PROFILE_UPDATE_SUCCESS,
    DATA_PROFILE_UPDATE_FAILURE,
    DATA_PROFILE_SUCCESS,
    DATA_PROFILE_FAILURE,
    DATA_PROFILE_CLEAR,
} from "../../actions/User/ProfileActions"


let initalState = {
    dataProfile: [],
    dataAchievements: [],
    dataLikes: [],
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
            let new_state = {}
            action.payload.results.length === 0
                ? new_state = {
                    ...state,
                    dataHealth: [],
                    isLoadedHealth: false
                }
                : new_state = {
                    ...state,
                    dataHealth: action.payload,
                    isLoadedHealth: true
                }
            return new_state
        case DATA_LAST_HEALTH_FAILURE:
            return {
                ...state,
                isLoadedHealth: false
            }

        case DATA_PROFILE_CLEAR:
            return {
                ...state,
                dataProfile: [],
                dataAchievements: [],
                dataHealth: {},
                isLoadedProfile: false,
                isLoadedAchievements: false,
                isLoadedHealth: false,
            }

        case DATA_PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                dataProfile: [],
                dataAchievements: [],
                dataHealth: {},
                isLoadedProfile: false,
                isLoadedAchievements: false,
                isLoadedHealth: false,
            }

        case DATA_PROFILE_UPDATE_FAILURE:
            return {
                ...state,
                dataProfile: [],
                dataAchievements: [],
                dataHealth: {},
                isLoadedProfile: false,
                isLoadedAchievements: false,
                isLoadedHealth: false,
            }
        default:
            return state;
    }
}
export default profileReducer;
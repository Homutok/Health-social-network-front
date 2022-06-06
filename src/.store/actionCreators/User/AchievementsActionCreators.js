import {
    DATA_ACHIEVEMENTS_SUCCESS,
    DATA_ACHIEVEMENTS_FAILURE
} from "../../actions/User/AchievementsActions"

export const getDataAchievementsSuccess = (data) => ({
    type: DATA_ACHIEVEMENTS_SUCCESS,
    payload: data
})
export const getDataAchievementsFailure = (error) => ({
    type: DATA_ACHIEVEMENTS_FAILURE,
    payload: error
})

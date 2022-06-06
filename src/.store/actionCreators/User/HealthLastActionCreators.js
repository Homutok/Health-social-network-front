import {
    DATA_LAST_HEALTH_SUCCESS,
    DATA_LAST_HEALTH_FAILURE
} from "../../actions/User/HealthLastActions"

export const getLastHealthsSuccess = (data) => ({
    type: DATA_LAST_HEALTH_SUCCESS,
    payload: data
})
export const getLastHealthFailure = (error) => ({
    type: DATA_LAST_HEALTH_FAILURE,
    payload: error
})

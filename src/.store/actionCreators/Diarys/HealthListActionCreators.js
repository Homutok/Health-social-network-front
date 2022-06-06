import {
    GET_HEALTH_DATA_SUCCESS,
    GET_HEALTH_DATA_FAILURE
} from "../../actions/Diarys/HealthListActions"

export const getHealthListSuccess = (data) => ({
    type: GET_HEALTH_DATA_SUCCESS,
    payload: data
})

export const getHealthListFailure = (error) => ({
    type: GET_HEALTH_DATA_FAILURE,
    payload: error
})

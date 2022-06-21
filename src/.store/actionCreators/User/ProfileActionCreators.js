import {
    DATA_PROFILE_UPDATE_SUCCESS,
    DATA_PROFILE_UPDATE_FAILURE,
    DATA_PROFILE_SUCCESS,
    DATA_PROFILE_FAILURE,
    DATA_PROFILE_CLEAR
} from "../../actions/User/ProfileActions"

export const getDataProfileSuccess = (data) => ({
    type: DATA_PROFILE_SUCCESS,
    payload: data
})
export const getDataProfileFailure = (error) => ({
    type: DATA_PROFILE_FAILURE,
    payload: error
})
export const dataProfileClear = () => ({
    type: DATA_PROFILE_CLEAR
})
export const updateDataProfileSuccess = () => ({
    type: DATA_PROFILE_UPDATE_SUCCESS
})
export const updateDataProfileFailure = (error) => ({
    type: DATA_PROFILE_UPDATE_FAILURE,
    payload: error
})

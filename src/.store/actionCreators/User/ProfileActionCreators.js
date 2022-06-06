import {
    DATA_PROFILE_SUCCESS,
    DATA_PROFILE_FAILURE
} from "../../actions/User/ProfileActions"

export const getDataProfileSuccess= (data) => ({
    type: DATA_PROFILE_SUCCESS,
    payload: data
})
export const getDataProfileFailure= (error) => ({
    type: DATA_PROFILE_FAILURE,
    payload: error
})

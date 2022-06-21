import {
    GET_SPORT_DATA_FAILURE,
    GET_SPORT_DATA_SUCCESS,
    SPORT_DATA_CLEAR
} from "../../actions/Diarys/SportDiaryActions"


export const getSportListSuccess = (data) => ({
    type: GET_SPORT_DATA_SUCCESS,
    payload: data
})

export const getSportListFailure = (error) => ({
    type: GET_SPORT_DATA_FAILURE,
    payload: error
})

export const sportListClear = () => ({
    type: SPORT_DATA_CLEAR
})

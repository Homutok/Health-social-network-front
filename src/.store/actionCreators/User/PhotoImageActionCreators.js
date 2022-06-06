import {
    DATA_IMAGE_SUCCESS,
    DATA_IMAGE_FAILURE
} from "../../actions/User/PhotoImageActions"

export const getDataImageSuccess= (images) => ({
    type: DATA_IMAGE_SUCCESS,
    payload: images
})
export const getDataImageFailure= (error) => ({
    type: DATA_IMAGE_FAILURE,
    payload: error
})

import {
    DATA_IMAGE_FAILURE,
    DATA_IMAGE_SUCCESS,
} from "../../actions/User/PhotoImageActions"

let initalState = {
    photoList: [],
    isLoaded:false
}
const photoReducer = (state = initalState, action) => {
    switch (action.type) {
        case DATA_IMAGE_SUCCESS:
            let LoadDataList = action.payload.map((post => post))
            return {
                ...state,
                photoList: LoadDataList,
                isLoaded:true
            };
        case DATA_IMAGE_FAILURE:
            return { ...state }
        default:
            return state;
    }
}
export default photoReducer;
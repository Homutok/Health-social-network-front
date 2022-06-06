import { connect } from 'react-redux';
import ChoosePhotoPage from './ChoosePhotoPage';
import {
    getPhotoDataList
} from '../../../.store/api/User/Setting/photo-api'

function mapStateToProps(state) {
    return {
        images: state.photo.photoList,
        isLoad: state.photo.isLoaded,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPhotoData: () => {
            dispatch(getPhotoDataList());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePhotoPage);
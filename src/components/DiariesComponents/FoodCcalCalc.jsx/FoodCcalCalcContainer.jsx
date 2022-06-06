import { connect } from 'react-redux';
import { getFoodInfo, getFoodNutrients } from '../../../.store/api/Food/food_search-api';
import CalculatorComponent from './CalculatorComponent';


function mapStateToProps(state) {
    return {
        dataList: state.food.foodList,
        selectedItems: state.food.selectedFoodList,
        isLoad: state.food.isLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        change_search: (text) => {
            dispatch(getFoodInfo(text));
        },
        get_food_info: (text) => {
            dispatch(getFoodNutrients(text));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorComponent);
import { connect } from 'react-redux';
import { addFood, deleteFood } from '../../../.store/actionCreators/Food/FoodSearchActionCreators';
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
        add_new_search: () => {
            dispatch(addFood());
        },
        delete_search: (index) => {
            dispatch(deleteFood(index));
        },
        get_food_info: (text, id) => {
            dispatch(getFoodNutrients(text, id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorComponent);
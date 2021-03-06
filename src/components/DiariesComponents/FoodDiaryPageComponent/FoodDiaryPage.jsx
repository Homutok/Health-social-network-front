import { useEffect, useState } from "react";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb"
import FoodCcalCalcContainer from "../FoodCcalCalc.jsx/FoodCcalCalcContainer";

const FoodDiaryPage = (props) => {

    const [isLoaded, setLoad] = useState(false);

    useEffect(() => {
    }, [props.isLoad])

    return <PageBreadCrumb
        parent='Дневники'
        child='Питание'
    >
        <FoodCcalCalcContainer />
    </PageBreadCrumb>
}
export default FoodDiaryPage
import { useEffect, useState } from "react";
import Loading from "../../OtherComponents/LoadingPage";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb"
import HealthChartList from "./HealthChartList";
import HealthOfWeekList from "./HealthOfWeekList";

const HealthStatPage = (props) => {

  const [isLoaded, setLoad] = useState(false);

  useEffect(() => {
    props.gethealthInfo()
    setLoad(props.isLoad)
  }, [props.isLoad])

  return isLoaded ?
    <PageBreadCrumb
      parent='Дневники'
      child='Здоровье'
    >
      <HealthOfWeekList
        posthealthInfo={props.posthealthInfo}
        data={props.healthOfWeek}
      />
      <HealthChartList
        data={props.healthArray}
        isLoad={props.isLoad}
      />
    </PageBreadCrumb> :
    <Loading />
}
export default HealthStatPage
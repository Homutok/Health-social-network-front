import { Space, Row } from "antd";
import PageBreadCrumb from "../OtherComponents/PageBreadCrumb"
import AchivmentsForm from "./AchivmentsForm";
import HealthForm from "./HealthForm";
import ProfileInfoForm from "./ProfileInfoForm";


const ProfilePage = (props) => {

    return <PageBreadCrumb
        parent='Профиль'
        child='Мой профиль'
    >
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row justify="center" align="middle" >
                <ProfileInfoForm
                    getInfo={props.getProfileInfo}
                    publicinfo={props.profile.public_user_info}
                    username={props.profile.username}
                    first_name={props.profile.first_name}
                    last_name={props.profile.last_name}
                    email={props.profile.email}
                    load={props.isLoadProfile}
                />
            </Row>
            <Row justify="center">
                <HealthForm
                    getInfo={props.getHealthInfo}
                    healthInfo={props.health}
                    isLoad={props.isLoadHealth}
                />
                <AchivmentsForm
                    getInfo={props.getAchievementsInfo}
                    achievInfo={props.achievements}
                    isLoad={props.isLoadAchievements}
                />
            </Row>
        </Space>
    </PageBreadCrumb>;
}
export default ProfilePage
import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import ChoosePhotoContainer from "../SettingPageComponents/ChoosePhotoProfile/ChoosePhotoContainer";
import LogoutContainer from "../AuthComponents/LogoutComponent/LogoutContainer";
import LoginContainer from "../AuthComponents/LoginFormComponent/LoginContainer";
import SportDiaryForm from "../DiariesComponents/SportDiaryPageComponent/SportDiaryPage";
import ProfileContainer from "../ProfilePageComponent/ProfileContainer";
import ToDoContainer from "../DiariesComponents/ToDoPageComponent/ToDoContainer";
import HealthContainer from "../DiariesComponents/HealthPageComponent/HealthContainer";
import FoodDiaryContainer from "../DiariesComponents/FoodDiaryPageComponent/FoodDiaryContainer";
import BlogListContainer from "../BlogComponents/BlogList/BlogListContainer";
import PostContainer from "../BlogComponents/PostDetail/PostContainer";


const ContentForm = () => {

    const { Content } = Layout;

    return <Content
        style={{
            margin: '0 16px',
        }}
    >
        <Routes>
            <Route path="" element={<LoginContainer/>} />
            <Route path="login" element={<LoginContainer/>} />
            <Route path="exit" element={<LogoutContainer/>} />
            <Route path="profile" element={<ProfileContainer />} />
            <Route path="blog/:id" element={<PostContainer />} />
            <Route path="blog-all" element={<BlogListContainer />} />
            <Route path="blog-fitnes" element={<BlogListContainer />} />
            <Route path="blog-recipe" element={<BlogListContainer />} />
            <Route path="edit/image" element={<ChoosePhotoContainer />} />
            <Route path="diaries-todo" element={<ToDoContainer />} />
            <Route path="diaries-health" element={<HealthContainer />} />
            <Route path="diaries-food" element={<FoodDiaryContainer />} />
            <Route path="diaries-training" element={<SportDiaryForm />} />
        </Routes>
    </Content>;
}
export default ContentForm
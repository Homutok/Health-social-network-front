import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import ChoosePhotoContainer from "../SettingPageComponents/ChoosePhotoProfile/ChoosePhotoContainer";
import LogoutContainer from "../AuthComponents/LogoutComponent/LogoutContainer";
import LoginContainer from "../AuthComponents/LoginFormComponent/LoginContainer";
import ProfileContainer from "../ProfilePageComponent/ProfileContainer";
import ToDoContainer from "../DiariesComponents/ToDoPageComponent/ToDoContainer";
import HealthContainer from "../DiariesComponents/HealthPageComponent/HealthContainer";
import FoodDiaryContainer from "../DiariesComponents/FoodDiaryPageComponent/FoodDiaryContainer";
import BlogListContainer from "../BlogComponents/BlogList/BlogListContainer";
import PostContainer from "../BlogComponents/PostDetail/PostContainer";
import SportDiaryContainer from "../DiariesComponents/SportDiaryPageComponent/SportDiaryContainer";
import RegisterContainer from "../AuthComponents/RegisterFormComponent/RegisterContainer";
import ProfileEditContainer from "../SettingPageComponents/ProfileEditSettings/ProfileEditContainer";
import FavouriteBlogContainer from "../BlogComponents/FavouriteBlog/FavouriteBlogContainer";


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
            <Route path="register" element={<RegisterContainer/>} />
            <Route path="exit" element={<LogoutContainer/>} />
            <Route path="profile" element={<ProfileContainer />} />
            <Route path="favourite" element={<FavouriteBlogContainer />} />
            <Route path="blog/search=:tag" element={<BlogListContainer />} />
            <Route path="blog/:id" element={<PostContainer />} />
            <Route path="blog-:type" element={<BlogListContainer />} />
            <Route path="settings-edit" element={<ProfileEditContainer />} />
            <Route path="settings-edit/image" element={<ChoosePhotoContainer />} />
            <Route path="diaries-todo" element={<ToDoContainer />} />
            <Route path="diaries-health" element={<HealthContainer />} />
            <Route path="diaries-food" element={<FoodDiaryContainer />} />
            <Route path="diaries-training" element={<SportDiaryContainer />} />
        </Routes>
    </Content>;
}
export default ContentForm
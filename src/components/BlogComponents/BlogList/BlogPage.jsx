import { Row, Space } from "antd";
import { useRef } from "react";
import { useEffect, useState } from "react";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";
import NewPostButton from "../BlogActions/NewPostButton";
import NewPostModal from "../BlogActions/NewPostModal";
import BlogList from "./BlogList";



const BlogPage = (props) => {
    const [visible, setVisible] = useState(false);

    const label = useRef();
    const text = useRef();

    const showModal = () => {
        setVisible(true);
    };
    const hideModal = () => {
        setVisible(false);
    };

    const completeNewPost = () => {
        let newTagArray = props.tagSelected.map((tag) => tag.id)
        props.createPost(
            label.current.input.value,
            text.current.resizableTextArea.props.value,
            newTagArray.join(","))
        hideModal();
    };



    useEffect(() => {
    }, [])

    return <PageBreadCrumb
        parent='Блог'
        child='Все записи'
    >
        <Space direction="vertical" size="middle" style={{ display: 'flex' }} wrap>
            <Row type="flex" justify="start" style={{ margin: '1%' }} >
                <NewPostButton showModal={showModal} />
            </Row>
            <NewPostModal
                label={label}
                text={text}
                tagSearch={props.tagSearch}
                tagSelected={props.tagSelected}
                changeSearch={props.change_search}
                selectSearch={props.select_search}
                addNewtag={props.add_new_search}
                deletTag={props.delete_search}
                visible={visible}
                completeNewPost={completeNewPost}
                showModal={showModal}
                hideModal={hideModal}
            />
            <BlogList
                profileID={props.profileInfo}
                like={props.LikePost}
                unlike={props.unLikePost}
                load={props.isLoadedCheck}
                loadProfile={props.profileLoad}
                getPosts={props.getPostsData}
                posts={props.posts} />
        </Space>
    </PageBreadCrumb>;
}
export default BlogPage
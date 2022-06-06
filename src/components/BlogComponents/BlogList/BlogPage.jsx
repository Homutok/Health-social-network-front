import { Row, Space } from "antd";
import { useEffect, useState } from "react";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";
import BlogList from "./BlogList";

import NewPostButton from "./NewPostButton";


const BlogPage = (props) => {

    useEffect(() => {
    }, [props.isLoadedCheck])

    return <PageBreadCrumb
        parent='Блог'
        child='Все записи'
    >
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row type="flex" justify="start" style={{ margin: '1%' }} >
                <NewPostButton />
            </Row>
            <BlogList load={props.isLoadedCheck} getPosts={props.getPostsData} posts={props.posts}/>
        </Space>
    </PageBreadCrumb>;
}
export default BlogPage
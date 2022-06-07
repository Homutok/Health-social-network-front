import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Space } from 'antd';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CommentList from './PostCommentsList'
import PostText from '../BlogList/BlogPostText';
import LikeButton from '../BlogList/BlogButtonLike';
import PostLoading from '../BlogList/PostLoad';
import CommentAdd from './PostCommentAdd';
import EditPostButton from '../BlogActions/PostEditButton';
import DeletePostButton from '../BlogActions/DeletePostButton';
import PageBreadCrumb from '../../OtherComponents/PageBreadCrumb';

const PostDetail = (props) => {
    const [post, setPost] = useState([]);
    const [isLoaded, setLoad] = useState(false);

    const id = useParams().id;

    const navigate = useNavigate();

    useEffect(() => {

        props.loadData(id)
        setPost(props.post)
        setLoad(props.isLoadedCheck)
    }
        , [props.isLoadedCheck])

    return isLoaded ?
        <PageBreadCrumb
            parent='Блог'
            child={post.id}
        >
            <Space direction='vertical' wrap style={{ width: '100%' }}>
                <Row type="flex" justify="end" style={{ margin: '1%' }}>
                    <DeletePostButton />
                </Row>
                <Row type="flex" justify="center" align="middle" key={post.id}>
                    <Card
                        hoverable
                        title={post.label}
                        align="middle"
                        style={{
                            width: '50%',
                        }}
                        loading={!isLoaded}
                    >
                        <PostText postData={post} fulltext={true} />
                        <Row>
                            <LikeButton />
                            <Col offset={10} >
                                <EditPostButton />
                            </Col>
                        </Row>
                        <CommentList comments={post.comment} />
                        <hr />
                        <CommentAdd />
                    </Card>
                </Row>
            </Space>
        </PageBreadCrumb>
        : <PostLoading />
}
export default PostDetail
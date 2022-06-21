import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Space, Image } from 'antd';
import { useParams } from 'react-router-dom';
import CommentList from './PostCommentsList'
import PostText from '../BlogList/BlogPostText';
import LikeButton from '../BlogList/BlogButtonLike';
import PostLoading from '../BlogList/PostLoad';
import CommentAdd from './PostCommentAdd';
import EditPostButton from '../BlogActions/PostEditButton';
import DeletePostButton from '../BlogActions/DeletePostButton';
import PageBreadCrumb from '../../OtherComponents/PageBreadCrumb';
import PostTagsView from './PostTagsView';

const PostDetail = (props) => {
    const [post, setPost] = useState([]);
    const [isLoaded, setLoad] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        props.loadData(id)
        setPost(props.post)
        setLoad(props.isLoadedCheck)
    }, [props.isLoadedCheck])

    const getUserAuthor = (id) =>
        props.profilePosts.filter(post => post === id).length > 0


    return <PageBreadCrumb
        parent='Блог'
        child={post.id}
    >
        {isLoaded
            ? <Space direction='vertical' wrap style={{ width: '100%' }}>
                <Row type="flex" justify="end" style={{ margin: '1%' }}>
                    {
                        getUserAuthor(post.id) ?
                            <DeletePostButton delete={props.postDelete} postId={post.id} />
                            : <></>
                    }

                </Row>
                <Row type="flex" justify="center" align="middle" key={post.id}>
                    <Card
                        hoverable
                        title={post.post_name}
                        align="middle"
                        style={{
                            width: '70%',
                            margin: '3%',
                        }}
                        loading={!isLoaded}
                        cover={
                            !!post.post_image
                                ? <Image
                                    alt="example"
                                    src={post.post_image}
                                    width='70%'
                                />
                                : null
                        }
                    >
                        <PostText postData={post} fulltext={true} />
                        <Row>
                            <LikeButton
                                profileID={props.profileInfo}
                                id={post.id}
                                liked={post.liked}
                                userLiked={post.likes_for_post}
                                like={props.LikePost}
                                unlike={props.unLikePost}
                            />
                            {/* <Col offset={10} >
                                {
                                    getUserAuthor(post.id) ?
                                        <EditPostButton />
                                        : <></>
                                }

                            </Col> */}
                        </Row>
                        <PostTagsView tags={post.post_tags} />
                        <CommentList comments={post.comment} />
                        <hr />
                        <CommentAdd postId={post.id} complete={props.completeComment} />
                    </Card>
                </Row>
            </Space>
            : <PostLoading />
        }
    </PageBreadCrumb>
}
export default PostDetail
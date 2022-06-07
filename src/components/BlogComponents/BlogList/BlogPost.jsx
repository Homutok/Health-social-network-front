import { Card, Image, Row } from "antd";
import { Link } from "react-router-dom";
import LikeButton from "./BlogButtonLike";
import MoreButton from "./BlogButtonMore";
import PostText from "./BlogPostText";


const BlogPost = (props) => {

    return <Card
        hoverable
        align="middle"
        title={props.data.post_name}
        type="inner"
        justify="center"
        style={{
            width: '70%',
            margin: '3%',
            // backgroundColor:'#e6e6e6'
        }}

        cover={
            !!props.data.post_image
                ? <Image
                    alt="example"
                    src={props.data.post_image}
                    width='70%'
                />
                : null
        }
    >
        <Link to={"/blog/" + props.data.id} style={{ color: 'black' }}>
            <PostText postData={props.data} fulltext={false} />
        </Link>
        <Row>
            <LikeButton />
            <MoreButton />
        </Row>
    </Card>
}
export default BlogPost
import { Button, Row } from "antd";
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";

const PostTagsView = (props) => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        setTags(props.tags)
    }, [props.tags])

    return <Row>
        {
            tags.map((tag) =>
                <Button shape="round" type="primary" key={tag.id}> {tag.tag_name} </Button>
            )
        }
    </Row>
}
export default PostTagsView
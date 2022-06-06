import { Card } from "antd"

const PostLoading = () => {
    return <Card
        hoverable
        align="middle"
        style={{
            width: '70%',
        }}
        loading={true}
    />
}
export default PostLoading
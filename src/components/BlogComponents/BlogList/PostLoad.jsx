import { Card, Row, Space } from "antd"

const PostLoading = () => {
    return <Space direction='vertical' wrap style={{ width: '100%' }}>
        <Row type="flex" justify="center" align="middle" >
            <Card
                hoverable
                align="middle"
                style={{
                    width: '70%',
                    marfin: '3%'
                }}
                loading={true}
            />
        </Row>
    </Space>
}
export default PostLoading
import { SyncOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import React from 'react';
import PageBreadCrumb from './PageBreadCrumb';

const Loading = () => {
  return <PageBreadCrumb
    parent='Загрузка'
    child='Идет загрузка, подождите немного времени...'
  >
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <SyncOutlined
          spin
          style={{
            verticalAlign: 'middle',
            alignItems: 'center',
            fontSize: '300px',
          }}
        />
      </Col>
    </Row>
  </PageBreadCrumb>
}
export default Loading
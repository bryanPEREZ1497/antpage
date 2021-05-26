import React from 'react';
import { Spin } from 'antd';
import { Row, Col } from 'antd';
export default function Radio() {
  return (
    <>
      <Col span={24} className="col">
        <Spin size="large" />
      </Col>
    </>
  );
}

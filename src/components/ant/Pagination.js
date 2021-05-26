import React from 'react';
import { Pagination } from 'antd';
import { Row, Col } from 'antd';
export default function Radio() {
  return (
    <>
      <Col span={24} className="col">
        <Pagination defaultCurrent={1} total={50} />
      </Col>
    </>
  );
}

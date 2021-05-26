import React from 'react';
import {
  AppleOutlined,
  WindowsOutlined,
  AndroidFilled
} from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function Icons() {
  return (
    <>
      <Col span={8} className="col">
        <AndroidFilled style={{ color: 'greenyellow' }} className="icon" />
      </Col>
      <Col span={8} className="col">
        <AppleOutlined style={{ color: 'grey' }} className="icon" />
      </Col>
      <Col span={8} className="col">
        <WindowsOutlined style={{ color: 'blue' }} className="icon" />
      </Col>
    </>
  );
}

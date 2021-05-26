import React from 'react';
import { Calendar } from 'antd';
import { Row, Col } from 'antd';
export default function Radio() {
  return (
    <>
      <Col span={24} className="col">
        <Calendar onPanelChange={onPanelChange} />
      </Col>
    </>
  );
}

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

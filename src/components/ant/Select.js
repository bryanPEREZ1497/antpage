import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
import { Row, Col } from 'antd';
export default function Radio() {
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Col span={24} className="col">
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
          <Option value="lucy">Lucy</Option>
        </Select>
      </Col>
    </>
  );
}

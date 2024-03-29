import React, { useState } from 'react';
import { DatePicker, TimePicker, Select, Space } from 'antd';
const { Option } = Select;
import { Row, Col } from 'antd';

function PickerWithType({ type, onChange }) {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

export default function DatePicker() {
  const [type, setType] = useState('time');
  return (
    <Col span={24} className="col">
      <Space>
        <Select value={type} onChange={setType}>
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
        <PickerWithType type={type} onChange={value => console.log(value)} />
      </Space>
    </Col>
  );
}

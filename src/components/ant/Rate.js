import React from 'react';
import { Rate } from 'antd';
import { Row, Col } from 'antd';
export default function Rate() {
  const [value, setValue] = React.useState(3);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const handleChange = value => {
    setValue(value);
  };
  return (
    <>
      <Col span={24} className="col">
        <span>
          <Rate tooltips={desc} onChange={handleChange} value={value} />
          {value ? (
            <span className="ant-rate-text">{desc[value - 1]}</span>
          ) : (
            ''
          )}
        </span>
      </Col>
    </>
  );
}

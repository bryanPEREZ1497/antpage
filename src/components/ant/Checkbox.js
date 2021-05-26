import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Checkbox, Button } from 'antd';
export default function Checkbox() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = e => {
    console.log('checked = ', e.target.checked);
    setChecked((checked = e.target.checked));
  };

  let label = `${checked ? 'Checked' : 'Unchecked'}-${
    disabled ? 'Disabled' : 'Enabled'
  }`;
  return (
    <>
      <Col span={24} className="col">
        <p style={{ marginBottom: '20px' }}>
          <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={toggleChecked}>
            {!checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ margin: '0 10px' }}
            type="primary"
            size="small"
            onClick={toggleDisable}
          >
            {!disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </Col>
    </>
  );
}

import React from 'react';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import '../style.css';
export default function Home() {
  return (
    <Col span={24} className="col">
      <Carousel afterChange={onChange} className="Carousel">
        <div>
          <h3 style={contentStyle}>Home Page</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Ant Design</h3>
        </div>
      </Carousel>
    </Col>
  );
}

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import { Row, Col } from 'antd';
export default function Card() {
  return (
    <>
      <Col span={24} className="col">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </>
  );
}

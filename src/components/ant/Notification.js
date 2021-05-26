import React from 'react';
import { Button, notification, Space } from 'antd';

export default function Tabs() {
  return (
    <Space>
      <Button onClick={() => openNotificationWithIcon('success')}>
        Success
      </Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>
        Warning
      </Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </Space>
  );
}

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  });
};

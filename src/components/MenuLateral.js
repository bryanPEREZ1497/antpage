import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
import { Link, NavLink } from 'react-router-dom';
export default function MenuLateral() {
  const [collapsed, setCollapse] = useState(false);
  return (
    <div style={{ width: 200 }}>
      <Menu
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<ContainerOutlined />}>
          <Link to="/icons">Icons</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ContainerOutlined />}>
          <Link to="/card">Card</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Link to="/checkbox">Checkbox</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ContainerOutlined />}>
          <Link to="/radio">Radio</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ContainerOutlined />}>
          <Link to="/rate">Rate</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<ContainerOutlined />}>
          <Link to="/select">Select</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<ContainerOutlined />}>
          <Link to="/datepicker">DatePicker</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<ContainerOutlined />}>
          <Link to="/upload">Upload</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<ContainerOutlined />}>
          <Link to="/calendar">Calendar</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<ContainerOutlined />}>
          <Link to="/table">Table</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<ContainerOutlined />}>
          <Link to="/modal">Modal</Link>
        </Menu.Item>
        <Menu.Item key="12" icon={<ContainerOutlined />}>
          <Link to="/spin">Spin</Link>
        </Menu.Item>
        <Menu.Item key="13" icon={<ContainerOutlined />}>
          <Link to="/pagination">Pagination</Link>
        </Menu.Item>
        <Menu.Item key="14" icon={<ContainerOutlined />}>
          <Link to="/dropdown">Dropdown</Link>
        </Menu.Item>
        <Menu.Item key="15" icon={<ContainerOutlined />}>
          <Link to="/form">Form</Link>
        </Menu.Item>
        <Menu.Item key="16" icon={<ContainerOutlined />}>
          <Link to="/tabs">Tabs</Link>
        </Menu.Item>
        <Menu.Item key="17" icon={<ContainerOutlined />}>
          <Link to="/notification">Notification</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

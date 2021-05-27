import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/* --- */
//antd
import { Layout } from 'antd';
import { Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
/* --- */
///ant
import Notification from './ant/Notification';
import Tabs from './ant/Tabs';
import Form from './ant/Form';
import Dropdown from './ant/Dropdown';
import Icons from './ant/Icons';
import Card from './ant/Card';
import Checkbox from './ant/Checkbox';
import Radio from './ant/Radio';
import Rate from './ant/Rate';
import Select from './ant/Select';
import DatePicker from './ant/DatePicker';
import Upload from './ant/Upload';
import Calendar from './ant/Calendar';
import Table from './ant/Table';
import Modal from './ant/Modal';
import Spin from './ant/Spin';
import Pagination from './ant/Pagination';
import MenuLateral from './MenuLateral';
export default function AppRouter() {
  return (
    <div>
      <Router>
        <Layout>
          <Header>
            <h1 style={{ color: 'white' }}>Ant Components</h1>
          </Header>
          <Layout>
            <Sider>
              <MenuLateral />
            </Sider>
            <Content className="content">
              <Row justify="center" className="rol">
                <Switch>
                  <Route exact path="/icons" component={Icons} />
                  <Route exact path="/card" component={Card} />
                  <Route exact path="/checkbox" component={Checkbox} />
                  <Route exact path="/radio" component={Radio} />
                  <Route exact path="/rate" component={Rate} />
                  <Route exact path="/select" component={Select} />
                  <Route exact path="/datepicker" component={DatePicker} />
                  <Route exact path="/upload" component={Upload} />
                  <Route exact path="/calendar" component={Calendar} />
                  <Route exact path="/table" component={Table} />
                  <Route exact path="/modal" component={Modal} />
                  <Route exact path="/spin" component={Spin} />
                  <Route exact path="/pagination" component={Pagination} />
                  <Route exact path="/dropdown" component={Dropdown} />
                  <Route exact path="/form" component={Form} />
                  <Route exact path="/tabs" component={Tabs} />
                  <Route exact path="/notification" component={Notification} />
                  <Route path="/" component={Icons} />
                </Switch>
              </Row>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Bryan Pérez</Footer>
        </Layout>
      </Router>
    </div>
  );
}

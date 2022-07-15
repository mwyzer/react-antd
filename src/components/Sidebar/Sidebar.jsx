import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ContactsOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Sidebar.css';
import DataTable from '../Table/Table';
import TableJson from '../Table/TableJson';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'About',
            },
            {
              key: '3',
              icon: <ContactsOutlined />,
              label: 'Contacts',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <DataTable /> */}
          <TableJson />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

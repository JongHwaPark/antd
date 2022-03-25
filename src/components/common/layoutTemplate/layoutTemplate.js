import React from 'react';
import { Link, Outlet } from "react-router-dom";
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import Logo from './assets/logo.png';

import "./layoutTemplate.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menuStruct = [
  {
    title: 'Operation',
    icon: <PieChartOutlined />,
    children: [
      {
        title: '로봇 제어',
        url: '/operation/robotControl'
      },
      {
        title: '목표물 추적',
        url: '/operation/targetTracking'
      },
      {
        title: '목표물 지시',
        url: '/operation/targetCommand'
      },
      {
        title: '표면 검사',
        url: '/operation/inspection'
      },
    ]
  },
  {
    title: 'Device',
    icon: <DesktopOutlined />,
    url: '/device'
  },
  {
    title: 'Setting',
    icon: <DesktopOutlined />,
    children: [
      {
        title: '지도',
        url: '/setting/map'
      },
      {
        title: '동기화',
        url: '/setting/sync'
      },
      {
        title: '기준점',
        url: '/setting/standard'
      },
      {
        title: '참조점',
        url: '/setting/reference'
      },
    ]
  },
  {
    title: 'Log',
    icon: <DesktopOutlined />,
    url: '/log'
  },
];

function SideFooter() {
  return (
    <div className="side-footer">
      <div className="side-footer-wrap">
        <div>
          <SettingOutlined />
        </div>
        <ul className="time-wrap">
          <li>오후 3:41</li>
          <li>2020-03-20</li>
        </ul>
      </div>
    </div>
  );
}

function LayoutTemplate({ children }) {

  return (
    <Layout style={{ width:'1500px', height:'1000px', margin:'0 auto', minHeight: '100vh', flexDirection: 'row' }}>
      <Sider >
        <div className="logo">
          <img src={Logo} />
          <span>ARDENT ROBOT</span>
        </div>
        <Menu theme="dark" mode="inline" defaultOpenKeys={['0']} defaultSelectedKeys={['0-0']} >
          {
            menuStruct.map((menu, index) => {
              if (menu.children) {
                return (
                  <SubMenu key={`${index}`} icon={menu.icon} title={menu.title}>
                    {
                      menu.children.map((sub, subIndex) => {
                        return (
                          <Menu.Item key={`${index}-${subIndex}`}><Link to={sub.url}>{sub.title}</Link></Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={`${index}`} icon={menu.icon}>
                    <Link to={menu.url}>{menu.title}</Link>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
        <SideFooter />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: '0 1.5vw' }}>
          Header 다
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutTemplate;

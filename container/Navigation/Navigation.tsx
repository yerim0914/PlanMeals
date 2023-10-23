
import './Navigation.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
  } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Typography, Collapse } from 'antd';

import { useRouter } from 'next/navigation';
import React, { ReactNode, useState } from 'react';

const { Sider, Content, Footer } = Layout;
const { Title } = Typography;

interface NavigationProps {
  content: ReactNode;
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  
  const setCollapsedHandler = () => {
    return collapsed === true ? setCollapsed(false): setCollapsed(true);
  }

  return (
      <Layout rootClassName="NavigationWrapper">
      <Sider trigger={null} collapsible collapsed={collapsed} theme={'light'} style={{minWidth:"100%", height:"100%"}}>
        <div className="nav-menu">
        <Button
            className='nav-fold-button'
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Button type="text" style={{margin: '20px 0', width: '100%', height: '100px', fontSize: 'xx-large', fontWeight: '800', color: 'rgb(13, 13, 43)', display: "inline"}}
            onClick={() => {router.push('./')}}
          >
            {collapsed ? "냉부" : <span className="multi-line-text">냉장고를 부탁해</span>}
          </Button>
          <Button
            type="text"
            onClick={() => {router.push('./recommend')}}
            className={collapsed ? "navbtn" : "navbtn recommend-btn"}
          />
          <Button
            type="text"
            onClick={() => {router.push('./ingredient')}}
            className={collapsed ? "navbtn": "navbtn ingredient-btn"}
          />
          <Button
            type="text"
            onClick={() => {router.push('./mypage')}}
            className={collapsed ? "navbtn": "navbtn mypage-btn"}
          />
        </div>
      </Sider> 
      <Layout>
        <Content
          className='content-wrapper'
          style={{
            backgroundColor: '#fafcfc',
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Navigation;
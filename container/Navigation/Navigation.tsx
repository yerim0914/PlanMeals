
import './Navigation.css';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuOutlined,
    ArrowRightOutlined,
  } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Typography } from 'antd';

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

  const recButton: React.CSSProperties = {
    backgroundImage: `url('../../public/utensils.svg')`
  }

  const setCollapsedHandler = () => {
    return collapsed === true ? setCollapsed(false): setCollapsed(true);
  }

  return (
      <Layout rootClassName="NavigationWrapper">
      <div className="navigation-sider">
      <Sider trigger={null} collapsible collapsed={collapsed} theme={'light'} style={{minWidth:"100%"}}>
        <div className="nav-menu">
          <Button type="text" style={{margin: '20px 0', width: '100%', height: '100px', fontSize: 'xx-large', fontWeight: '800', color: 'rgb(13, 13, 43)'}}
            onClick={() => {router.push('./')}}
          >
            냉장고를 <br />
            부탁해
          </Button>
          <Button
            type="text"
            onClick={() => {router.push('./recommend')}}
            className="navbtn recommend-btn"
          />
          <Button
            type="text"
            onClick={() => {router.push('./ingredient')}}
            className="navbtn ingredient-btn"
          />
          <Button
            type="text"
            onClick={() => {router.push('./mypage')}}
            className="navbtn mypage-btn"
          />
        </div>
      </Sider> 
      </div>
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
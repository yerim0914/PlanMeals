'use client';
import React, { useState } from 'react';
import KakaoLoginButton from './login';
import { Typography, Image, Layout} from 'antd';
import './mypage.css';

const { Title, Text } = Typography;

const MyPage: React.FC = () => {
 
  return (
    <Layout className='mypage-wrapper'>
      <Title className='mypage-header'>
      건강한 집밥을 위한 냉장고 관리
      </Title>
      <Layout className='mypage-login-wrapper'>
      <Text
        style={{fontSize:"30px"}}
      >로그인 하시면 많은 혜택을 받으실 수 있습니다.</Text>
      <Image
        alt='이미지'
        width={400}
        height={350}
        src="./happylogin.jpg"
      />
      <KakaoLoginButton />
      </Layout>
    </Layout>
  );
};

export default MyPage;
'use client';
import React, { useState } from 'react';
import KakaoLoginButton from './login';
import { Typography, Image, Layout} from 'antd';
import './mypage.css';

const { Title, Text } = Typography;

const MyPage: React.FC = () => {
 
  return (
    <Layout className='mypage-wrapper'>
      <Text className='mypage-header'>
      건강한 집밥을 위한 냉장고 관리
      </Text>
      <Layout className='mypage-login-wrapper'>
      <Text
        className='login-text'
        style={{
          textSizeAdjust: "auto",
          fontFamily: "sans-serif"
      }}>로그인하시면 많은 혜택을 받으실 수 있습니다.
      </Text>
      <Image
        className='happylogin-image'
        alt='이미지'
        src="./happylogin.jpg"
      />
      <KakaoLoginButton />
      </Layout>
    </Layout>
  );
};

export default MyPage;
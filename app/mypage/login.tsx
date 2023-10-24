import React from 'react';
import KakaoLogin from 'react-kakao-login';

const KakaoLoginButton: React.FC = () => {
  const responseKaKao = (res: any) => {
    // 로그인 후 처리
    if (res) {
      // res.profile, res.response, res.accessToken 등을 사용할 수 있습니다.
      console.log(res);
    } else {
      console.error('카카오 로그인 실패');
    }
  };

  return (
    <div>
      <KakaoLogin
        token='key'
        // jsKey="YOUR_KAKAO_JAVASCRIPT_KEY"
        onSuccess={responseKaKao}
        onFail={(err) => console.error(err)}
        // getProfile
      />
    </div>
  );
};

export default KakaoLoginButton;
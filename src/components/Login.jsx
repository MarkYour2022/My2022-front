import React from 'react';
import styled from 'styled-components';
import Header from './common/Header';

// KAKAO 로그인 용
// CLIENT_ID 로 REST API 키 사용 필요
const KAKAO_CLIENT_ID = '8c4fe302ab56aaa4483671505fe3adff';
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export default function Login() {
  const LoginContainer = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  `;

  function LoginBtn() {
    const LoginButton = styled.button`
      width: 100%;
      position: relative;
      font-weight: bold;
      border-radius: 10px;
      padding: 1rem;
      margin-top: 2rem;
      margin: auto;
      cursor: pointer;
      border: solid 0.5px;
      border-color: #c8c8c8;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    // 직접 만든거
    return (
      <div
        className="LoginBox"
        style={{
          padding: '3rem',
          marginTop: '3rem',
          width: '70%',
        }}
      >
        <a href={KAKAO_AUTH_URL}>
          <LoginButton style={{ backgroundColor: ' #FEE500' }}>
            <img
              src="img/kakao.png"
              alt="카카오로그인"
              style={{ width: '10%', position: 'absolute', left: '6%' }}
            />
            카카오톡으로 간편 로그인
          </LoginButton>
        </a>
      </div>
    );
  }
  function HomeImg() {
    return <img alt="peopleimg" src="img/home.png" width={'80%'} />;
  }

  return (
    <LoginContainer>
      <Header />
      <a href="/">
        <img
          src="img/logo.png"
          alt="logo"
          style={{ width: '70%', margin: '8% 0' }}
        />
      </a>
      <HomeImg />
      <LoginBtn />
    </LoginContainer>
  );
}

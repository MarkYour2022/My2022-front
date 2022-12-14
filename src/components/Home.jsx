import styled from 'styled-components';
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from './Modal';
import { React, useEffect, useState } from 'react';
import Header from './common/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomeHeader() {
  return (
    <>
      <Header />
      <div>
        <img
          src="img/logo.png"
          alt="logo"
          width={150}
          style={{
            left: '0',
            right: '0',
            margin: 'auto',
          }}
        />
      </div>
    </>
  );
}

function HeadingBox() {
  const HeadingText = styled.p`
    font-size: 1.5rem;
    line-height: 1.4rem;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'GangwonEduSaeeum_OTFMediumA';
  `;
  return (
    <div className="wrap" style={{ position: 'relative' }}>
      <img src="img/homememo.png" alt="๋ฉ๋ชจ์ง" width={'90%'} />
      <HeadingText>
        ๐ป๐๐๐๐๐ ๐๐๐ ๐ฎ๐๐๐๐๐๐
        <br />
        {/* Thanks and Goodbye 2022โจ <br /> */}
        ๊ณ ๋ง์ ๊ณ  ์๊ฐ๋ผ 2022! <br />
        ๊ทธ๋ฐ๋ฐ.. <br />๋ ์ฌํด ๋ญํ์ง๐ โ
      </HeadingText>
    </div>
  );
}

function HomeImg() {
  return <img alt="peopleimg" src="img/home.png" width={'80%'} />;
}

function TitleBox() {
  const TitleText1 = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0.5rem;
  `;
  const TitleText2 = styled.p`
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding: 0.5rem;
  `;

  return (
    <div className="HomeFont">
      <TitleText1>
        ์์คํ ๋์
        <br />
        2022๋์ ๊ธฐ๋กํด ๋ณด์ธ์!
      </TitleText1>
      <TitleText2>
        Q&A๋ก ํ ๋์ ๋ณด๋ <br />์ฌ ํํด ์ต๊ณ ์ ์๊ฐ
      </TitleText2>
    </div>
  );
}
function HomeButton() {
  /* ---------- Start KAKAO SHARE ----------*/
  //Init KAKAO API
  if (!window.Kakao.isInitialized()) {
    // @ts-ignore
    //REST API KEY
    window.Kakao.init(process.env.REACT_APP_KAKAO_SHARE);
    //@ts-ignore
    // console.log(window.Kakao.isInitialized());
  }

  const shareKakaoLink = () => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn',
      templateId: 85063,
      templateArgs: {
        path: '',
      },
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink('');
  };
  /* ---------- End KAKAO SHARE ----------*/

  const [modal, setModal] = useState(false);
  const { userId, havePost } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="button" align="center">
      <Stack spacing={-1} width={'200px'} padding={2}>
        {userId && !havePost ? (
          <Button
            variant="contained"
            onClick={() => {
              navigate('/write');
            }}
            style={{ fontSize: '1rem' }}
          >
            My 2022 ๋ง๋ค๊ธฐ
          </Button>
        ) : userId && havePost ? (
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/result/${userId}`);
            }}
            style={{ fontSize: '1rem' }}
          >
            My 2022 ๋ณด๊ธฐ
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              setModal(true);
            }}
            style={{ fontSize: '1rem' }}
          >
            My 2022 ๋ง๋ค๊ธฐ
          </Button>
        )}
        {modal === true ? <Modal /> : null}
        <br />
        <Button
          id="kakao-link-btn"
          variant="outlined"
          color="primary"
          className="kakaoBtn"
          onClick={onShareKakaoClick}
          style={{ fontSize: '1rem' }}
        >
          ๊ณต์ ํ๊ธฐ
        </Button>
      </Stack>
    </div>
  );
}

export default function Home() {
  const Container = styled.div`
    /* background-color: #225854; */
    background-color: white;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
  `;

  return (
    <>
      <Container fixed>
        <HomeHeader />
        <HeadingBox />
        <TitleBox />
        <HomeImg />
        <HomeButton></HomeButton>
      </Container>
    </>
  );
}

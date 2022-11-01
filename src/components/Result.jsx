import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
/*****Start 컴포넌트 저장 모듈*****/
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
/*****End 컴포넌트 저장 모듈*****/
import makePdf from './ResultExport';
import ShowResult from './ShowResult';

import { Button } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import KakaoLogo from '../assets/img/kakao_logo.png';

const Base = styled.p`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 2rem;
`;

const ModifyBtn = styled.button`
  padding: 1rem;
  border: none;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #444747d3;
    color: white;
  }
`;
const KakaoShareBtn = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
    color: #000000;
    text-decoration: underline;
  }
`;
const DifferentModeBtn = styled.button`
  padding: 1rem;
  border: none;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #444747d3;
    color: white;
  }
`;

function Result({ no }) {
  /* ---------- Start KAKAO SHARE ----------*/
  //Init KAKAO API
  if (!window.Kakao.isInitialized()) {
    // @ts-ignore
    //REST API KEY
    window.Kakao.init('6f7c7a916a1585a8b72c45ee842576dc');
    //@ts-ignore
    console.log(window.Kakao.isInitialized());
  }

  const userId = '';

  const shareKakaoLink = (userId) => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn',
      templateId: 85063,
      templateArgs: {
        userId: `${userId}`,
      },
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink(userId);
  };
  /* ---------- End KAKAO SHARE ----------*/

  /*****Start PDF Saving function*****/
  const pdf = makePdf();

  const onDownloadPdfBtn = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };
  /*****End PDF Saving function*****/

  /*****Start Img Saving function*****/
  const cardRef = useRef();
  //사진으로 저장하기 함수
  const onDownloadBtn = () => {
    const wholeCard = cardRef.current;
    domtoimage.toBlob(document.querySelector('.wholeCard')).then((blob) => {
      saveAs(blob, 'result.png');
    });
  };
  /*****End Img Saving function *****/

  const onModifyEvent = () => {
    window.location.href = `/modify?post_id=${no}`;
  };

  const onDifferentClick = () => {
    window.location.href = `/resultmode?post_id=${no}`;
  };

  return (
    <>
      <Base className="wholeCard">
        <ShowResult />
      </Base>
      <ButtonBlock>
        <Button
          style={{
            width: '200px',
            display: 'flex',
            margin: '0 auto',
            marginBottom: '10px',
          }}
          className="downBtn"
          onClick={onDownloadBtn}
          variant="contained"
          color="info"
          startIcon={<SaveAltIcon />}
        >
          <p href="" style={{ fontSize: '1rem' }}>
            사진으로 저장하기
          </p>
        </Button>
        <Button
          style={{ width: '200px', display: 'flex', margin: '0 auto' }}
          className="downPdfBtn"
          onClick={onDownloadPdfBtn}
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
        >
          <p href="" style={{ fontSize: '1rem' }}>
            PDF로 저장하기
          </p>
        </Button>
      </ButtonBlock>
      <ButtonBlock>
        <ModifyBtn className="modifyBtn" onClick={onModifyEvent}>
          <p href="" style={{ fontSize: '1rem' }}>
            수정하기
          </p>
        </ModifyBtn>

        <DifferentModeBtn className="differentBtn" onClick={onDifferentClick}>
          다른 모드로 만들기
        </DifferentModeBtn>

        <KakaoShareBtn
          id="kakao-link-btn"
          className="kakaoBtn"
          type="button"
          onClick={onShareKakaoClick}
        >
          공유하기
          <img src={KakaoLogo} width={'7%'} height={'7%'} alt="kakao logo" />
        </KakaoShareBtn>
      </ButtonBlock>
    </>
  );
}
export default Result;

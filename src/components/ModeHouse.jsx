import React from 'react';
import styled from 'styled-components';

export default function ModeHouse() {
  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    /* background-color: #ffffff; */
    background-image: url('img/modeHouse2.png');
    background-size: cover;
    /* background-size: contain; */
    background-repeat: no-repeat;
    width: 90%;
    /* height: 1000px; */
    text-align: center;
    margin: auto;
    padding: 3rem;
    padding-top: 6rem;

    word-break: keep-all;
    color: #fff;
    font-family: 'GongGothicMedium';
    line-height: 1.8rem;
    top: 0%;
  `;

  function TextList() {
    return (
      <>
        <div style={{ padding: '1.5rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                paddingTop: '8rem',
              }}
            >
              ㅇㅇ님의
            </p>
            <p
              style={{
                color: '#FFCD4A',
                paddingLeft: '0.5rem',
                fontSize: '2rem',
                paddingTop: '8rem',
              }}
            >
              2022년
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>1. 올해 가장 기억에 남는 사람은?</p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>2. 올해 가장 기억에 남는 장소는?</p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>3. 올해 가장 가치 있는 소비는?</p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>4. 올해 가장 기억에 남는 음식은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>5. 올해 인상 깊었던 콘텐츠는? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>6. 올해 도전한 것은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>7. 올해 성취한 것은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>8. 나를 사로잡은 감정은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>9. 올해 함께한 사람들에게 한마디 </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>10. 나에게 한마디 </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>간단 답변</p>
        </div>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <div style={{ padding: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.5rem',
              }}
            >
              My 2022
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TextBox>
        <TextList />
        <Footer />
      </TextBox>
    </>
  );
}
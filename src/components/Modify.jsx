import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { modifyPost } from '../modules/post';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GlobalButton from './common/GlobalButton';

const WriteContainer = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  padding: 1rem 0 3rem;
`;

const NicknameInputContainer = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & .input_text {
    font-size: 32px;
    font-weight: 600;
  }
`;

const QuestionsContainer = styled.ul`
  width: 100%;
  background-color: #fff;
  list-style: none;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

const QuestionFormContainer = styled.li`
  position: relative;
  width: 80%;
  background-color: #fff;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 40%;
  padding: 0.5rem;
  background-color: orange;
  border-radius: 15px;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
`;

const Question = styled.h3`
  margin: 1rem 0;
  color: #333;
`;

function QuestionForm({ img_change }) {
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.post);
  const [answers, setAnswers] = useState({});
  const {
    name,
    a1,
    d1,
    a2,
    d2,
    a3,
    d3,
    a4,
    d4,
    a5,
    d5,
    a6,
    d6,
    a7,
    d7,
    a8,
    d8,
    a9,
    a10,
  } = answers;

  const answerChangeHandler = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]: event.target.value,
    });
    // console.log(answers);
  };

  const onUpdatePost = async (payload) => {
    await axios
      .post(`http://localhost:4000/posts/${params.postId}/edit`, payload)
      .then((res) => {
        console.log(res.data.message);
        return res.data.message;
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = {
      post_content: {
        name,
        a1,
        d1,
        a2,
        d2,
        a3,
        d3,
        a4,
        d4,
        a5,
        d5,
        a6,
        d6,
        a7,
        d7,
        a8,
        d8,
        a9,
        a10,
      },
    };
    const request = onUpdatePost(body);
    dispatch(modifyPost(request));
    navigate(`/result/${answer.user_id}`);
  };

  const goToResult = () => {
    navigate(`/result/${answer.user_id}`);
  };

  useEffect(() => {
    setAnswers(answer.post_content);
  }, []);

  return (
    <WriteContainer onSubmit={onSubmit}>
      <NicknameInputContainer>
        <Box
          sx={{
            width: '100px',
            maxWidth: '100%',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            required={true}
            name="name"
            defaultValue={answer.post_content.name}
            onChange={answerChangeHandler}
            inputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
        </Box>
        <span className="input_text">?????? 2022???</span>
      </NicknameInputContainer>
      <QuestionsContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>1. ?????? ?????? ????????? ?????? ????????? ????????????????</Question>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              name="a1"
              defaultValue={answer.post_content.a1}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              name="d1"
              defaultValue={answer.post_content.d1}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>2. ?????? ?????? ????????? ?????? ????????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a2"
              defaultValue={answer.post_content.a2}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d2"
              defaultValue={answer.post_content.d2}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>3. ?????? ?????? ?????? ?????? ????????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a3"
              defaultValue={answer.post_content.a3}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d3"
              defaultValue={answer.post_content.d3}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>4. ?????? ?????? ????????? ?????? ????????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a4"
              defaultValue={answer.post_content.a4}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d4"
              defaultValue={answer.post_content.d4}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>?????????</Title>
          <Question>5. ?????? ?????? ????????? ???????????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a5"
              defaultValue={answer.post_content.a5}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d5"
              defaultValue={answer.post_content.d5}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>6. ?????? ????????? ?????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a6"
              defaultValue={answer.post_content.a6}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d6"
              defaultValue={answer.post_content.d6}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>7. ?????? ????????? ?????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a7"
              defaultValue={answer.post_content.a7}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d7"
              defaultValue={answer.post_content.d7}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>??????</Title>
          <Question>8. ?????? ?????? ???????????? ????????? ????????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="?????? ??????"
              name="a8"
              defaultValue={answer.post_content.a8}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="?????? ??????"
              name="d8"
              defaultValue={answer.post_content.d8}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>?????????</Title>
          <Question>9. ?????? ????????? ??????????????? ????????? ????????????.</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={6}
              fullWidth
              label="?????? ??????"
              name="a9"
              required={true}
              defaultValue={answer.post_content.a9}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>?????????</Title>
          <Question>10. ????????? ????????? ????????????</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={6}
              fullWidth
              label="?????? ??????"
              name="a10"
              required={true}
              defaultValue={answer.post_content.a10}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
      </QuestionsContainer>
      <GlobalButton clickEvent={goToResult} text1="????????????" text2="????????????" />
    </WriteContainer>
  );
}

export default QuestionForm;

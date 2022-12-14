import React from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const QuestionFormContainer = styled.li`
  position: relative;
  width: 80%;
  /* height: 250px; */
  height: 260px;
  background-color: #fff;
  /* border: 2px solid orange;
  border-radius: 4px; */
  margin-top: 50px;
`;

const Title = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  top: -25px;
  left: calc(80% - 50%);
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const Question = styled.h3`
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 10px;
  color: #333;
`;

// const SimpleInput = styled.input`
//   width: 90%;
//   height: 50px;
//   background-color: orange;
//   border: none;
//   font-size: 18px;
//   padding: 10px;

//   &:focus {
//     outline: none;
//   }

//   @media all and (max-width: 380px) {
//     height: 30px;
//   }
// `;

// const DetailInput = styled.textarea`
//   width: 90%;
//   height: 100px;
//   margin-top: 10px;
//   background-color: orange;
//   resize: none;
//   border: none;
//   font-size: 18px;
//   padding: 10px;

//   &:focus {
//     outline: none;
//   }

//   @media all and (max-width: 380px) {
//     height: 100px;
//   }
// `;

// const DetailAnwser = styled.textarea`
//   width: 90%;
//   height: 160px;
//   background-color: orange;
//   resize: none;
//   border: none;
//   font-size: 18px;
//   padding: 10px;

//   &:focus {
//     outline: none;
//   }

//   @media all and (max-width: 380px) {
//     height: 100px;
//   }
// `;

function QuestionForm({ anwser, anwser_change, img_change }) {
  // const imgInputRef = useRef();

  return (
    <>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>1.올해 가장 기억에 남는 장소는 어디인가요?</Question>
        {/* <SimpleInput
          name="a1"
          type="text"
          value={anwser.a1}
          onChange={anwser_change}
        /> */}
        {/* <DetailInput
          name="d1"
          required={true}
          value={anwser.d1}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a1"
            value={anwser.a1}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d1"
            required={true}
            value={anwser.d1}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>Flex</Title>
        <Question>2.올해 가장 기억에 남는 소비는 무엇인가요?</Question>
        {/* <SimpleInput
          name="a2"
          type="text"
          value={anwser.a2}
          onChange={anwser_change}
        />
        <DetailInput
          name="d2"
          required={true}
          value={anwser.d2}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a2"
            value={anwser.a2}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d2"
            required={true}
            value={anwser.d2}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>사람</Title>
        <Question>3.올해 내 삶에 가장 기여한 사람은 누구인가요?</Question>
        {/* <SimpleInput
          name="a3"
          type="text"
          value={anwser.a3}
          onChange={anwser_change}
        />
        <DetailInput
          name="d3"
          required={true}
          value={anwser.d3}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a3"
            value={anwser.a3}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d3"
            required={true}
            value={anwser.d3}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>나</Title>
        <Question>4.올해 나를 사로잡은 감정은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a4"
          type="text"
          value={anwser.a4}
          onChange={anwser_change}
        />
        <DetailInput
          name="d4"
          required={true}
          value={anwser.d4}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a4"
            value={anwser.a4}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d4"
            required={true}
            value={anwser.d4}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>콘텐츠</Title>
        <Question>올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>
        {/* <SimpleInput
          name="a5"
          type="text"
          value={anwser.a5}
          onChange={anwser_change}
        />
        <DetailInput
          name="d5"
          required={true}
          value={anwser.d5}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a5"
            value={anwser.a5}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d5"
            required={true}
            value={anwser.d5}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>도전</Title>
        <Question>올해 도전한 것은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a6"
          type="text"
          value={anwser.a6}
          onChange={anwser_change}
        />
        <DetailInput
          name="d6"
          required={true}
          value={anwser.d6}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a6"
            value={anwser.a6}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d6"
            required={true}
            value={anwser.d6}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>성취</Title>
        <Question>올해 성취한 것은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a7"
          type="text"
          value={anwser.a7}
          onChange={anwser_change}
        />
        <DetailInput
          name="d7"
          required={true}
          value={anwser.d7}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a7"
            value={anwser.a7}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d7"
            required={true}
            value={anwser.d7}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>장소</Question>
        {/* <SimpleInput
          name="a8"
          type="text"
          value={anwser.a8}
          onChange={anwser_change}
        />
        <DetailInput
          name="d8"
          required={true}
          value={anwser.d8}
          onChange={anwser_change}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a8"
            value={anwser.a8}
            onChange={anwser_change}
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
            label="상세 답변"
            name="d8"
            required={true}
            value={anwser.d8}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>너에게</Title>
        <Question>올해 함께한 사람들에게 한마디 해주세요.</Question>
        {/* <DetailAnwser
          name="d9"
          required={true}
          value={anwser.d9}
          onChange={anwser_change}
        /> */}
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
            label="상세 답변"
            name="d9"
            required={true}
            value={anwser.d9}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>나에게</Title>
        <Question>나에게 한마디 해주세요.</Question>
        {/* <DetailAnwser
          name="d10"
          required={true}
          value={anwser.d10}
          onChange={anwser_change}
        /> */}
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
            label="상세 답변"
            name="d10"
            required={true}
            value={anwser.d10}
            onChange={anwser_change}
          />
        </Box>
      </QuestionFormContainer>
      <Stack direction="row" alignItems="center" spacing={2} mt={1}>
        <Button variant="contained" component="label">
          <PhotoCamera />
          Upload
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            name="img"
            onChange={img_change}
          />
        </Button>
      </Stack>
    </>
  );
}

export default QuestionForm;

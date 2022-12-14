import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

export default function ModeSummary() {
  const { answer } = useSelector((state) => state.post);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'GongGothicMedium',
  }));

  function Footer() {
    return (
      <>
        <div style={{ paddingTop: '1rem' }}>
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
                color: 'gray',
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
    <div
      className="wrap"
      style={{
        backgroundColor: '#f3ece3',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
        width: '100%',
        paddingTop: '5%',
        paddingBottom: '5%',
        margin: 'auto',
        marginTop: '1rem',
        wordBreak: 'keep-all',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid
          justifyContent="center"
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Grid item xs={8}>
            <Item
              style={{
                backgroundColor: '#FFF',
                padding: '0.5rem',
                margin: '1rem',
                fontSize: '1.2rem',
                color: 'black',
              }}
            >
              {answer.post_content.name}λμ 2022λ π§Έπ
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item
              style={{
                backgroundColor: '#f1685e',
                color: 'black',
                fontFamily: 'GongGothicMedium',
              }}
            >
              #μ¬λ
            </Item>
            <Item>{answer.post_content.a1}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item
              style={{
                backgroundColor: '#f1685e',
                color: 'black',
              }}
            >
              #μ₯μ
            </Item>
            <Item>{answer.post_content.a2}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #μλΉ
            </Item>
            <Item>{answer.post_content.a3}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #μμ
            </Item>
            <Item>{answer.post_content.a4}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #μ½νμΈ 
            </Item>
            <Item>{answer.post_content.a5}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #λμ 
            </Item>
            <Item>{answer.post_content.a6}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #μ±μ·¨
            </Item>
            <Item>{answer.post_content.a7}</Item>
          </Grid>
          <Grid item xs={5}>
            <Item style={{ backgroundColor: '#f1685e', color: 'black' }}>
              #κ°μ 
            </Item>
            <Item>{answer.post_content.a8}</Item>
          </Grid>
          <Grid item xs={10}>
            <Item style={{ backgroundColor: '#3b2b57 ', color: 'white' }}>
              π λμκ² π
            </Item>
            <Item>{answer.post_content.a9}</Item>
          </Grid>
          <Grid item xs={10}>
            <Item style={{ backgroundColor: '#3b2b57 ', color: 'white' }}>
              π λμκ² π
            </Item>
            <Item>{answer.post_content.a10}</Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

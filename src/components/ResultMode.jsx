import React, { useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../assets/img/capuchine.JPG';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { FullscreenExit } from '@material-ui/icons';

const Base = styled.div`
  width: 500px;
  background-color: olive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function ResultMode() {
  return (
    <Base>
      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '350px' }} src={img1} alt="기본 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              기본 모드
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '350px' }} src={img1} alt="시상 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              시상 모드
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '350px' }} src={img1} alt="태그 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              태그 모드
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ width: 300, marginTop: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia />
          <img style={{ width: '350px' }} src={img1} alt="일기 모드" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              일기 모드
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Choose
          </Button>
        </CardActions>
      </Card>
    </Base>
  );
}

export default ResultMode;
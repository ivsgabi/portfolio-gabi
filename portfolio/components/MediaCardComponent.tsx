import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MediaCardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img className='C-icon-svg justify-center'>
        </img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            C Programming
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            blabla, blablabla, blablabla, blabla, blabla, blabla, blabla
            blabla, blablabla, blablabla, blabla, blabla, blabla, blabla
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
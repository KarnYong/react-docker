import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.attraction.coverimage}
        title={props.attraction.name}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" 
          component="div"
          noWrap={true}
        >
          {props.attraction.name}
        </Typography>
        <Typography variant="body2" 
          color="text.secondary"
          noWrap={true}
        >
          {props.attraction.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
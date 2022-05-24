import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(()=> {
    setTimeout(()=>{
      setLoader(true)
    }, 3000) 
  },[])

  return (
    <div className="App">
      {
      !loader
      ?   
      <div className='loader'>
        
      <Skeleton animation="wave"
            height={100}
            width="80%"
            style={{ marginBottom: 6 }} className="br" />
      <Skeleton animation="wave"
              height={100}
              width="80%"
              style={{ marginBottom: 6 }} className="br" />
            <Skeleton animation="wave"
              height={100}
              width="80%"
              style={{ marginBottom: 6 }} className="br" />
        

<Skeleton animation="wave"
            height={100}
            width="80%"
            style={{ marginBottom: 6 }} className="br" />
      <Skeleton animation="wave"
              height={100}
              width="80%"
              style={{ marginBottom: 6 }} className="br" />
            <Skeleton animation="wave"
              height={100}
              width="80%"
              style={{ marginBottom: 6 }} className="br" />
              </div>
      : 
      <div className='cardx'>
      <Card sx={{ maxWidth: 345 }} style={{boxShadow:"5px 10px #8a8a8b5c"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://s2.reutersmedia.net/resources/r/?m=02&d=20210115&t=2&i=1547995210&w=780&fh=&fw=&ll=&pl=&sq=&r=2021-01-15T235511Z_38104_MRPRC2T6L9VK3MY_RTRMADP_0_BANGLADESH-DAILYLIFE"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 345 }} style={{marginTop: "30px", boxShadow:"5px 10px #8a8a8b5c"}} >
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="https://s2.reutersmedia.net/resources/r/?m=02&d=20210115&t=2&i=1547995210&w=780&fh=&fw=&ll=&pl=&sq=&r=2021-01-15T235511Z_38104_MRPRC2T6L9VK3MY_RTRMADP_0_BANGLADESH-DAILYLIFE"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
</CardActions>
</Card>
</div>
    
      }

    </div>
  );
}

export default App;

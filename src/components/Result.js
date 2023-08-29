import React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Result = (props) => {

    const [result, setresult] = useState(false);


    setInterval(()=>{
        setresult(true);
    },1000);
  return (
    <>
    {result==false?
    <div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>:
<>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
      <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <Item><h2>Your net word per minute is {props.nwpm} and gross word per minute is {props.gwpm}</h2></Item>
          <Grid item xs={0} md={1}></Grid>
          
                  
          
      
      <Grid item xs={3} md={4}></Grid>
      
        </Grid>
        
         
        
        
      </Grid>
   

  



  </Box>
  <div className='result'><button className="button-87" role="button">
          Get on the leaderboard
      </button></div>
      </>
  }

 


</>
  )
}

export default Result
import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { CenterFocusStrong, Flare, InputOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Timer from './Timer';

const Easy = () => {
  const data='In ands as a testament to the potential of simplicity in transforming our lives. Its benefits, spanning from stress reduction to improved focus and emotional regulation, are far-reaching. As the world becomes increasingly fast-paced, carving out moments to engage in mindful breathing can be a powerful act of self-care, leading to a more balanced and mindful existence. Repository is created';
const [curIndex, setcurIndex]=useState(0);
const [wordIndex, setwordIndex] = useState(0);
const[bar, setBar]=useState(0);
const[Counting, setCounting] = useState(false);

const time=60;
const[TimeElapsed, setTimeElapsed]=useState(time);


function magic(value){
  
  if(!Counting)
  setCounting(true);
  setcurIndex(curIndex+1);
  if(value.endsWith(' '))
    setwordIndex(wordIndex+1);
  const arl=value.length;
  if(arl>0)
    if(data[arl-1]==value[arl-1])
      {
        setBar(1);
      }  
    else{
      setBar(2);
    }
 
      
}

  return (
    <>
    
   
      <Box className="textBox" sx={{backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.9, 0.9],
        },
      }}>
      <div className='textData'>{data}</div>
      </Box>
      <box>{Counting==true?<Timer/>:<div className='timer'>60</div>}</box>
      <Box className="textBox-input"
      sx={{
       
        
      }}
    >
    
      <TextField
          id="fullWidth"
          onChange={(e)=>{magic(e.target.value)}}
          fullWidth label="Start Typing!" 
          multiline
          rows={4}
          
          variant="standard"
        />
    </Box>
    {bar==1?<Correct/>:null}
      {bar==2?<Incorrect/>:null}
  
    </>
  
    
    )}
export default Easy
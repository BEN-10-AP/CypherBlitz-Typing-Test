import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { CenterFocusStrong, Flare, InputOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Timer from './Timer';
import NoTimer from './NoTimer';

const Easy = () => {
  const data='In ands as a testament to the potential of simplicity in transforming our lives. Its benefits, spanning from stress reduction to improved focus and emotional regulation, are far-reaching. As the world becomes increasingly fast-paced, carving out moments to engage in mindful breathing can be a powerful act of self-care, leading to a more balanced and mindful existence. Repository is created';
const [curIndex, setcurIndex]=useState(0);
const [wordIndex, setwordIndex] = useState(0);
const[bar, setBar]=useState(0);
const[Counting, setCounting] = useState(false);
const [checkOnce, setcheckOnce] = useState(false);


const[TimeElapsed, setTimeElapsed]=useState(60);
const [StrIndex, setStrIndex] = useState(0);


const Time1=(value)=>{

  
  setInterval(()=>{
  setTimeElapsed(0);
  },5000);
  
  if(TimeElapsed==0&&checkOnce==false)
  {
    setcheckOnce(true);
    let str="";
    let str1="";
    let count=0;
    let count1=0;
    value.trim();
    for(let i=0;i<value.length;i++)
    {
      if(value[i]!=' ')
            {   str+=value[i];
                str1+=data[i];
                
            }
        else
        {
          console.log(str);
          console.log(str1);
            if(str1===str)
              count=count+1;    
            count1=count1+1;
            //setStrIndex(StrIndex+1);

            str="";
            str1="";
        }
    }
    setStrIndex(count);
    setwordIndex(count1);
  }
  }

function magic(value){
  
  if(!Counting)
  setCounting(true);
  setcurIndex(curIndex+1);
  
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
      
      <div className='timer'>{Counting==true?<Timer/>:<NoTimer/>}</div>
      <div>{bar==1?<Correct/>:null}
      {bar==2?<Incorrect/>:null}
      </div>
      <Box className="textBox-input"
      sx={{
       
        
      }}
    >
    
      <TextField
          id="fullWidth"
          onChange={(e)=>{magic(e.target.value); Time1(e.target.value)}}
          
          fullWidth label="Start Typing!" 
          multiline
          rows={4}
          
          variant="standard"
        />
    </Box>
    <div>Your net word per minute is {StrIndex} and gross word per minute is {wordIndex}</div>
    
    </>
  
    
    )}
export default Easy
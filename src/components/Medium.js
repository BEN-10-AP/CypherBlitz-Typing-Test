import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { CenterFocusStrong, Flare, InputOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Timer from './Timer';
import NoTimer from './NoTimer';
import Result from './Result';


const Medium = () => {
  const data='The better behaviour resulting from smart devices is just one threat to the insurance industry. Conventional risk pools (for home or car insurance, for example) are shrinking as preventable accidents decline, leaving the slow-footed giants of the industry at risk. Business is instead moving to digital-native insurers, many of which are offering low premiums to those willing to collect and share their data. Yet the biggest winners could be tech companies rather than the firms that now dominate the industry. Insurance is increasingly reliant on the use of technology to change behaviour; firms act as helicopter parents to policyholders, warning of impending harm—slow down; reduce your sugar intake; call the plumber—the better to reduce unnecessary payouts.';
const [curIndex, setcurIndex]=useState(0);
const wordIndex = useRef(0);
const[bar, setBar]=useState(0);
const[Counting, setCounting] = useState(false);
const [checkOnce, setcheckOnce] = useState(false);
const [leaderOn, setleaderOn] = useState(false);
const prevIndex = useRef("");
const [inputValue,setInputValue] = useState("");
const diff = "Medium"

const[TimeElapsed, setTimeElapsed]=useState(60);
const StrIndex = useRef(0);

function leaderBoardOn(){
  setleaderOn(true);
}

useEffect(()=>{
prevIndex.current = inputValue;
},[inputValue])

const Time1=()=>{

  setInterval(()=>{
    setTimeElapsed(0);
  },60000)
  console.log(prevIndex.current);
  
    setcheckOnce(true);
    let str="";
    let str1="";
   let count =0;
   let count1=0;
    prevIndex.current.trim();
    for(let i=0;i<prevIndex.current.length;i++)
    {
      if(prevIndex.current[i]!=' ')
            {   str+=prevIndex.current[i];
                str1+=data[i];
                
            }
        else
        {
          
            if(str1===str)
            count = count +1;
            count1=count1+1;
            //setStrIndex(StrIndex+1);

            str="";
            str1="";
        }

    }
    StrIndex.current=count;    
    wordIndex.current=count1;
    
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
          onChange={(e)=>{magic(e.target.value); setInputValue(e.target.value); Time1() }}
          
          fullWidth label="Start Typing!" 
          multiline
          rows={4}
          
          variant="standard"
        />
    </Box>
    
    {TimeElapsed==0?<Result nwpm={StrIndex.current} gwpm={wordIndex.current} diff={diff}/>:null}
    
    

   
    </>
  
    
    )}
    
export default Medium
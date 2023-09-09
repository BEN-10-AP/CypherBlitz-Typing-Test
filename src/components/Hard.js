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


const Hard = () => {
  const data='Bygmester Finnegan, of the Stuttering Hand, freemen\'s maurer, lived in the broadest way immarginable in his rushlit toofar-back for messuages before joshuan judges had given us numbers or Helviticus committed deuteronomy (one yeastyday he sternely struxk his tete in a tub for to watsch the future of his fates but ere he swiftly stook it out again, by the might of moses, the very water was eviparated and all the guenneses had met their exodus so that ought to show you what a pentschanjeuchy chap he was! and during mighty odd years this man of hod, cement and edifices in Toper\'s Thorp piled buildung supra buildung pon the banks for the livers by the Soangso. He addle liddle phifie Annie ugged the little craythur. Wither hayre in honds tuck up your part inher. Oftwhile balbulous, mithre ahead, with goodly trowel in grasp and ivoroiled overalls which he habitacularly fondseed, like Haroun Childeric Eggeberth he would caligulate by multiplicables the alltitude and malltitude until he seesaw by neatlight of the liquor wheretwin \'twas born, his roundhead staple of other days to rise in undress maisonry upstanded (joygrantit!), a waalworth of a skyerscape of most eyeful hoyth entowerly, erigenating from next to nothing and celescalating the himals and all, hierarchitectitiptitoploftical, with a burning bush abob off its baubletop and with larrons o\'toolers clittering up and tombles a\'buckets clottering down.';
const [curIndex, setcurIndex]=useState(0);
const wordIndex = useRef(0);
const[bar, setBar]=useState(0);
const[Counting, setCounting] = useState(false);
const [checkOnce, setcheckOnce] = useState(false);
const [leaderOn, setleaderOn] = useState(false);
const prevIndex = useRef("");
const [inputValue,setInputValue] = useState("");
const diff = "Hard"

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
    
export default Hard